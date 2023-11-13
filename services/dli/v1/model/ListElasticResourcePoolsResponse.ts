import { ElasticResourcePoolsResponse } from './ElasticResourcePoolsResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListElasticResourcePoolsResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    public count?: number;
    private 'elastic_resource_pools'?: Array<ElasticResourcePoolsResponse>;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): ListElasticResourcePoolsResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ListElasticResourcePoolsResponse {
        this['message'] = message;
        return this;
    }
    public withCount(count: number): ListElasticResourcePoolsResponse {
        this['count'] = count;
        return this;
    }
    public withElasticResourcePools(elasticResourcePools: Array<ElasticResourcePoolsResponse>): ListElasticResourcePoolsResponse {
        this['elastic_resource_pools'] = elasticResourcePools;
        return this;
    }
    public set elasticResourcePools(elasticResourcePools: Array<ElasticResourcePoolsResponse>  | undefined) {
        this['elastic_resource_pools'] = elasticResourcePools;
    }
    public get elasticResourcePools(): Array<ElasticResourcePoolsResponse> | undefined {
        return this['elastic_resource_pools'];
    }
}