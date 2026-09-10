import { ConnectionsHost } from './ConnectionsHost';


export class CreateConnectionReq {
    public name?: string;
    private 'dest_vpc_id'?: string;
    private 'dest_network_id'?: string;
    public clusters?: Array<string>;
    public hosts?: Array<ConnectionsHost>;
    private 'routetable_id'?: string;
    public constructor(name?: string, destVpcId?: string, destNetworkId?: string) { 
        this['name'] = name;
        this['dest_vpc_id'] = destVpcId;
        this['dest_network_id'] = destNetworkId;
    }
    public withName(name: string): CreateConnectionReq {
        this['name'] = name;
        return this;
    }
    public withDestVpcId(destVpcId: string): CreateConnectionReq {
        this['dest_vpc_id'] = destVpcId;
        return this;
    }
    public set destVpcId(destVpcId: string  | undefined) {
        this['dest_vpc_id'] = destVpcId;
    }
    public get destVpcId(): string | undefined {
        return this['dest_vpc_id'];
    }
    public withDestNetworkId(destNetworkId: string): CreateConnectionReq {
        this['dest_network_id'] = destNetworkId;
        return this;
    }
    public set destNetworkId(destNetworkId: string  | undefined) {
        this['dest_network_id'] = destNetworkId;
    }
    public get destNetworkId(): string | undefined {
        return this['dest_network_id'];
    }
    public withClusters(clusters: Array<string>): CreateConnectionReq {
        this['clusters'] = clusters;
        return this;
    }
    public withHosts(hosts: Array<ConnectionsHost>): CreateConnectionReq {
        this['hosts'] = hosts;
        return this;
    }
    public withRoutetableId(routetableId: string): CreateConnectionReq {
        this['routetable_id'] = routetableId;
        return this;
    }
    public set routetableId(routetableId: string  | undefined) {
        this['routetable_id'] = routetableId;
    }
    public get routetableId(): string | undefined {
        return this['routetable_id'];
    }
}