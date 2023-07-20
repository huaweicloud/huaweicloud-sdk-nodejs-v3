import { EnhancedConnectionResourceInfo } from './EnhancedConnectionResourceInfo';
import { EnhancedConnectionsHost } from './EnhancedConnectionsHost';


export class ListEnhancedConnectionsDetail {
    public id?: string;
    public name?: string;
    public status?: string;
    private 'available_queue_info'?: Array<EnhancedConnectionResourceInfo>;
    private 'elastic_resource_pools'?: Array<EnhancedConnectionResourceInfo>;
    private 'dest_vpc_id'?: string;
    private 'dest_network_id'?: string;
    private 'create_time'?: number;
    public hosts?: Array<EnhancedConnectionsHost>;
    public isPrivis?: boolean;
    public constructor() { 
    }
    public withId(id: string): ListEnhancedConnectionsDetail {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListEnhancedConnectionsDetail {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): ListEnhancedConnectionsDetail {
        this['status'] = status;
        return this;
    }
    public withAvailableQueueInfo(availableQueueInfo: Array<EnhancedConnectionResourceInfo>): ListEnhancedConnectionsDetail {
        this['available_queue_info'] = availableQueueInfo;
        return this;
    }
    public set availableQueueInfo(availableQueueInfo: Array<EnhancedConnectionResourceInfo>  | undefined) {
        this['available_queue_info'] = availableQueueInfo;
    }
    public get availableQueueInfo(): Array<EnhancedConnectionResourceInfo> | undefined {
        return this['available_queue_info'];
    }
    public withElasticResourcePools(elasticResourcePools: Array<EnhancedConnectionResourceInfo>): ListEnhancedConnectionsDetail {
        this['elastic_resource_pools'] = elasticResourcePools;
        return this;
    }
    public set elasticResourcePools(elasticResourcePools: Array<EnhancedConnectionResourceInfo>  | undefined) {
        this['elastic_resource_pools'] = elasticResourcePools;
    }
    public get elasticResourcePools(): Array<EnhancedConnectionResourceInfo> | undefined {
        return this['elastic_resource_pools'];
    }
    public withDestVpcId(destVpcId: string): ListEnhancedConnectionsDetail {
        this['dest_vpc_id'] = destVpcId;
        return this;
    }
    public set destVpcId(destVpcId: string  | undefined) {
        this['dest_vpc_id'] = destVpcId;
    }
    public get destVpcId(): string | undefined {
        return this['dest_vpc_id'];
    }
    public withDestNetworkId(destNetworkId: string): ListEnhancedConnectionsDetail {
        this['dest_network_id'] = destNetworkId;
        return this;
    }
    public set destNetworkId(destNetworkId: string  | undefined) {
        this['dest_network_id'] = destNetworkId;
    }
    public get destNetworkId(): string | undefined {
        return this['dest_network_id'];
    }
    public withCreateTime(createTime: number): ListEnhancedConnectionsDetail {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withHosts(hosts: Array<EnhancedConnectionsHost>): ListEnhancedConnectionsDetail {
        this['hosts'] = hosts;
        return this;
    }
    public withIsPrivis(isPrivis: boolean): ListEnhancedConnectionsDetail {
        this['isPrivis'] = isPrivis;
        return this;
    }
}