import { EnhancedConnectionHost } from './EnhancedConnectionHost';
import { EnhancedConnectionResource } from './EnhancedConnectionResource';


export class EnhancedConnection {
    public id?: string;
    public name?: string;
    public status?: string;
    private 'available_queue_info'?: Array<EnhancedConnectionResource>;
    private 'elastic_resource_pools'?: Array<EnhancedConnectionResource>;
    private 'dest_vpc_id'?: string;
    private 'dest_network_id'?: string;
    private 'create_time'?: number;
    public hosts?: Array<EnhancedConnectionHost>;
    public isPrivis?: boolean;
    public constructor() { 
    }
    public withId(id: string): EnhancedConnection {
        this['id'] = id;
        return this;
    }
    public withName(name: string): EnhancedConnection {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): EnhancedConnection {
        this['status'] = status;
        return this;
    }
    public withAvailableQueueInfo(availableQueueInfo: Array<EnhancedConnectionResource>): EnhancedConnection {
        this['available_queue_info'] = availableQueueInfo;
        return this;
    }
    public set availableQueueInfo(availableQueueInfo: Array<EnhancedConnectionResource>  | undefined) {
        this['available_queue_info'] = availableQueueInfo;
    }
    public get availableQueueInfo(): Array<EnhancedConnectionResource> | undefined {
        return this['available_queue_info'];
    }
    public withElasticResourcePools(elasticResourcePools: Array<EnhancedConnectionResource>): EnhancedConnection {
        this['elastic_resource_pools'] = elasticResourcePools;
        return this;
    }
    public set elasticResourcePools(elasticResourcePools: Array<EnhancedConnectionResource>  | undefined) {
        this['elastic_resource_pools'] = elasticResourcePools;
    }
    public get elasticResourcePools(): Array<EnhancedConnectionResource> | undefined {
        return this['elastic_resource_pools'];
    }
    public withDestVpcId(destVpcId: string): EnhancedConnection {
        this['dest_vpc_id'] = destVpcId;
        return this;
    }
    public set destVpcId(destVpcId: string  | undefined) {
        this['dest_vpc_id'] = destVpcId;
    }
    public get destVpcId(): string | undefined {
        return this['dest_vpc_id'];
    }
    public withDestNetworkId(destNetworkId: string): EnhancedConnection {
        this['dest_network_id'] = destNetworkId;
        return this;
    }
    public set destNetworkId(destNetworkId: string  | undefined) {
        this['dest_network_id'] = destNetworkId;
    }
    public get destNetworkId(): string | undefined {
        return this['dest_network_id'];
    }
    public withCreateTime(createTime: number): EnhancedConnection {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withHosts(hosts: Array<EnhancedConnectionHost>): EnhancedConnection {
        this['hosts'] = hosts;
        return this;
    }
    public withIsPrivis(isPrivis: boolean): EnhancedConnection {
        this['isPrivis'] = isPrivis;
        return this;
    }
}