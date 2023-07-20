

export class ListElasticResourcePoolScaleRecordsRequest {
    private 'elastic_resource_pool_name'?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    public status?: ListElasticResourcePoolScaleRecordsRequestStatusEnum | string;
    public offset?: number;
    public limit?: number;
    public constructor(elasticResourcePoolName?: string) { 
        this['elastic_resource_pool_name'] = elasticResourcePoolName;
    }
    public withElasticResourcePoolName(elasticResourcePoolName: string): ListElasticResourcePoolScaleRecordsRequest {
        this['elastic_resource_pool_name'] = elasticResourcePoolName;
        return this;
    }
    public set elasticResourcePoolName(elasticResourcePoolName: string  | undefined) {
        this['elastic_resource_pool_name'] = elasticResourcePoolName;
    }
    public get elasticResourcePoolName(): string | undefined {
        return this['elastic_resource_pool_name'];
    }
    public withStartTime(startTime: number): ListElasticResourcePoolScaleRecordsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListElasticResourcePoolScaleRecordsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withStatus(status: ListElasticResourcePoolScaleRecordsRequestStatusEnum | string): ListElasticResourcePoolScaleRecordsRequest {
        this['status'] = status;
        return this;
    }
    public withOffset(offset: number): ListElasticResourcePoolScaleRecordsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListElasticResourcePoolScaleRecordsRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListElasticResourcePoolScaleRecordsRequestStatusEnum {
    SUCCESS = 'success',
    FAIL = 'fail'
}
