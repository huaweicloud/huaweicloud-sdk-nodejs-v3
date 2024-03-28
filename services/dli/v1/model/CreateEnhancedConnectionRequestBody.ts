import { EnhancedConnectionHost } from './EnhancedConnectionHost';
import { Tag } from './Tag';


export class CreateEnhancedConnectionRequestBody {
    public name?: string;
    private 'dest_vpc_id'?: string;
    private 'dest_network_id'?: string;
    private 'elastic_resource_pools'?: Array<string>;
    public queues?: Array<string>;
    public hosts?: Array<EnhancedConnectionHost>;
    private 'routetable_id'?: string;
    public tags?: Array<Tag>;
    public constructor(name?: string, destVpcId?: string, destNetworkId?: string) { 
        this['name'] = name;
        this['dest_vpc_id'] = destVpcId;
        this['dest_network_id'] = destNetworkId;
    }
    public withName(name: string): CreateEnhancedConnectionRequestBody {
        this['name'] = name;
        return this;
    }
    public withDestVpcId(destVpcId: string): CreateEnhancedConnectionRequestBody {
        this['dest_vpc_id'] = destVpcId;
        return this;
    }
    public set destVpcId(destVpcId: string  | undefined) {
        this['dest_vpc_id'] = destVpcId;
    }
    public get destVpcId(): string | undefined {
        return this['dest_vpc_id'];
    }
    public withDestNetworkId(destNetworkId: string): CreateEnhancedConnectionRequestBody {
        this['dest_network_id'] = destNetworkId;
        return this;
    }
    public set destNetworkId(destNetworkId: string  | undefined) {
        this['dest_network_id'] = destNetworkId;
    }
    public get destNetworkId(): string | undefined {
        return this['dest_network_id'];
    }
    public withElasticResourcePools(elasticResourcePools: Array<string>): CreateEnhancedConnectionRequestBody {
        this['elastic_resource_pools'] = elasticResourcePools;
        return this;
    }
    public set elasticResourcePools(elasticResourcePools: Array<string>  | undefined) {
        this['elastic_resource_pools'] = elasticResourcePools;
    }
    public get elasticResourcePools(): Array<string> | undefined {
        return this['elastic_resource_pools'];
    }
    public withQueues(queues: Array<string>): CreateEnhancedConnectionRequestBody {
        this['queues'] = queues;
        return this;
    }
    public withHosts(hosts: Array<EnhancedConnectionHost>): CreateEnhancedConnectionRequestBody {
        this['hosts'] = hosts;
        return this;
    }
    public withRoutetableId(routetableId: string): CreateEnhancedConnectionRequestBody {
        this['routetable_id'] = routetableId;
        return this;
    }
    public set routetableId(routetableId: string  | undefined) {
        this['routetable_id'] = routetableId;
    }
    public get routetableId(): string | undefined {
        return this['routetable_id'];
    }
    public withTags(tags: Array<Tag>): CreateEnhancedConnectionRequestBody {
        this['tags'] = tags;
        return this;
    }
}