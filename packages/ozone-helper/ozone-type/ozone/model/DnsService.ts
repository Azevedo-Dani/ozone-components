import {Item, UUID, Instant, OzoneType} from './Item'

@OzoneType("dns.service")
export class DnsService extends Item { 
   forwarders?: [string]
 } 
