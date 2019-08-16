import ip from 'ip'
function getMinimumPrefix(totalHost,numSubnet = 1) {
  for(let i = 1 ; i <= 32 ; i++) 
    if((Math.pow(2,i) - 2*numSubnet) >= (totalHost)) {
      return i
    }
}

function getVLSM(hosts,network = 0) {
  hosts.sort((b,a) => a[0]-b[0])
  const subnets = [] 
  let previousNet = network

  for(let host of hosts)  {
    const minPrefix = getMinimumPrefix(host[0])
    const prefixHostTotal = Math.pow(2,minPrefix)
    const ipdata = ip.cidrSubnet(`${ip.fromLong(previousNet)}/${32-minPrefix}`)
    ipdata.id = host[1]
    ipdata.order = host[2]
    subnets.push(ipdata)
    previousNet+=prefixHostTotal
  }
  return subnets.map(p => ({
    net: p.networkAddress,
    first : p.firstAddress,
    last : p.lastAddress,
    bc : p.broadcastAddress,
    subnetmask: p.subnetMask,
    prefix: p.subnetMaskLength,
    id: p.id
  }))
}

export default {getMinimumPrefix,getVLSM}
