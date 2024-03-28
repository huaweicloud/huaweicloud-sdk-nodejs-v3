import { EnhancedConnectionHost } from './EnhancedConnectionHost';
import { EnhancedConnectionResource } from './EnhancedConnectionResource';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowEnhancedConnectionResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    public id?: string;
    public name?: string;
    public status?: string;
    private 'available_queue_info'?: Array<EnhancedConnectionResource>;
    private 'elastic_resource_pools'?: Array<EnhancedConnectionResource>;
    private 'dest_vpc_id'?: string;
    private 'dest_network_id'?: string;
    private 'create_time'?: number;
    public hosts?: Array<EnhancedConnectionHost>;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): ShowEnhancedConnectionResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ShowEnhancedConnectionResponse {
        this['message'] = message;
        return this;
    }
    public withId(id: string): ShowEnhancedConnectionResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowEnhancedConnectionResponse {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): ShowEnhancedConnectionResponse {
        this['status'] = status;
        return this;
    }
    public withAvailableQueueInfo(availableQueueInfo: Array<EnhancedConnectionResource>): ShowEnhancedConnectionResponse {
        this['available_queue_info'] = availableQueueInfo;
        return this;
    }
    public set availableQueueInfo(availableQueueInfo: Array<EnhancedConnectionResource>  | undefined) {
        this['available_queue_info'] = availableQueueInfo;
    }
    public get availableQueueInfo(): Array<EnhancedConnectionResource> | undefined {
        return this['available_queue_info'];
    }
    public withElasticResourcePools(elasticResourcePools: Array<EnhancedConnectionResource>): ShowEnhancedConnectionResponse {
        this['elastic_resource_pools'] = elasticResourcePools;
        return this;
    }
    public set elasticResourcePools(elasticResourcePools: Array<EnhancedConnectionResource>  | undefined) {
        this['elastic_resource_pools'] = elasticResourcePools;
    }
    public get elasticResourcePools(): Array<EnhancedConnectionResource> | undefined {
        return this['elastic_resource_pools'];
    }
    public withDestVpcId(destVpcId: string): ShowEnhancedConnectionResponse {
        this['dest_vpc_id'] = destVpcId;
        return this;
    }
    public set destVpcId(destVpcId: string  | undefined) {
        this['dest_vpc_id'] = destVpcId;
    }
    public get destVpcId(): string | undefined {
        return this['dest_vpc_id'];
    }
    public withDestNetworkId(destNetworkId: string): ShowEnhancedConnectionResponse {
        this['dest_network_id'] = destNetworkId;
        return this;
    }
    public set destNetworkId(destNetworkId: string  | undefined) {
        this['dest_network_id'] = destNetworkId;
    }
    public get destNetworkId(): string | undefined {
        return this['dest_network_id'];
    }
    public withCreateTime(createTime: number): ShowEnhancedConnectionResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withHosts(hosts: Array<EnhancedConnectionHost>): ShowEnhancedConnectionResponse {
        this['hosts'] = hosts;
        return this;
    }
}