import { EnhancedConnectionsHost } from './EnhancedConnectionsHost';
import { TmsTagEntity } from './TmsTagEntity';


export class CreateEnhancedConnectionsReq {
    public name?: string;
    private 'dest_vpc_id'?: string;
    private 'dest_network_id'?: string;
    private 'elastic_resource_pools'?: Array<string>;
    public queues?: Array<string>;
    public hosts?: Array<EnhancedConnectionsHost>;
    private 'routetable_id'?: string;
    public tags?: Array<TmsTagEntity>;
    public constructor(name?: string, destVpcId?: string, destNetworkId?: string) { 
        this['name'] = name;
        this['dest_vpc_id'] = destVpcId;
        this['dest_network_id'] = destNetworkId;
    }
    public withName(name: string): CreateEnhancedConnectionsReq {
        this['name'] = name;
        return this;
    }
    public withDestVpcId(destVpcId: string): CreateEnhancedConnectionsReq {
        this['dest_vpc_id'] = destVpcId;
        return this;
    }
    public set destVpcId(destVpcId: string  | undefined) {
        this['dest_vpc_id'] = destVpcId;
    }
    public get destVpcId(): string | undefined {
        return this['dest_vpc_id'];
    }
    public withDestNetworkId(destNetworkId: string): CreateEnhancedConnectionsReq {
        this['dest_network_id'] = destNetworkId;
        return this;
    }
    public set destNetworkId(destNetworkId: string  | undefined) {
        this['dest_network_id'] = destNetworkId;
    }
    public get destNetworkId(): string | undefined {
        return this['dest_network_id'];
    }
    public withElasticResourcePools(elasticResourcePools: Array<string>): CreateEnhancedConnectionsReq {
        this['elastic_resource_pools'] = elasticResourcePools;
        return this;
    }
    public set elasticResourcePools(elasticResourcePools: Array<string>  | undefined) {
        this['elastic_resource_pools'] = elasticResourcePools;
    }
    public get elasticResourcePools(): Array<string> | undefined {
        return this['elastic_resource_pools'];
    }
    public withQueues(queues: Array<string>): CreateEnhancedConnectionsReq {
        this['queues'] = queues;
        return this;
    }
    public withHosts(hosts: Array<EnhancedConnectionsHost>): CreateEnhancedConnectionsReq {
        this['hosts'] = hosts;
        return this;
    }
    public withRoutetableId(routetableId: string): CreateEnhancedConnectionsReq {
        this['routetable_id'] = routetableId;
        return this;
    }
    public set routetableId(routetableId: string  | undefined) {
        this['routetable_id'] = routetableId;
    }
    public get routetableId(): string | undefined {
        return this['routetable_id'];
    }
    public withTags(tags: Array<TmsTagEntity>): CreateEnhancedConnectionsReq {
        this['tags'] = tags;
        return this;
    }
}