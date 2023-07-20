

export class DeleteElasticResourcePoolRequest {
    private 'elastic_resource_pool_name'?: string;
    public constructor(elasticResourcePoolName?: string) { 
        this['elastic_resource_pool_name'] = elasticResourcePoolName;
    }
    public withElasticResourcePoolName(elasticResourcePoolName: string): DeleteElasticResourcePoolRequest {
        this['elastic_resource_pool_name'] = elasticResourcePoolName;
        return this;
    }
    public set elasticResourcePoolName(elasticResourcePoolName: string  | undefined) {
        this['elastic_resource_pool_name'] = elasticResourcePoolName;
    }
    public get elasticResourcePoolName(): string | undefined {
        return this['elastic_resource_pool_name'];
    }
}