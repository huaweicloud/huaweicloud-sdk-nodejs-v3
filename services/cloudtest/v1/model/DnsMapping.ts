import { DnsMappingNode } from './DnsMappingNode';


export class DnsMapping {
    public dns?: Array<DnsMappingNode>;
    public constructor() { 
    }
    public withDns(dns: Array<DnsMappingNode>): DnsMapping {
        this['dns'] = dns;
        return this;
    }
}