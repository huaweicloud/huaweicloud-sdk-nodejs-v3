

export class ListElasticResourcePoolQueuesRequest {
    private 'elastic_resource_pool_name'?: string;
    public limit?: number;
    public offset?: number;
    private 'queue_name'?: string;
    public constructor(elasticResourcePoolName?: string) { 
        this['elastic_resource_pool_name'] = elasticResourcePoolName;
    }
    public withElasticResourcePoolName(elasticResourcePoolName: string): ListElasticResourcePoolQueuesRequest {
        this['elastic_resource_pool_name'] = elasticResourcePoolName;
        return this;
    }
    public set elasticResourcePoolName(elasticResourcePoolName: string  | undefined) {
        this['elastic_resource_pool_name'] = elasticResourcePoolName;
    }
    public get elasticResourcePoolName(): string | undefined {
        return this['elastic_resource_pool_name'];
    }
    public withLimit(limit: number): ListElasticResourcePoolQueuesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListElasticResourcePoolQueuesRequest {
        this['offset'] = offset;
        return this;
    }
    public withQueueName(queueName: string): ListElasticResourcePoolQueuesRequest {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
}