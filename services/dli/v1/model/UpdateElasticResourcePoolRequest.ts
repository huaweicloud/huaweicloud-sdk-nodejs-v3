import { UpdateElasticResourcePoolRequestBody } from './UpdateElasticResourcePoolRequestBody';


export class UpdateElasticResourcePoolRequest {
    private 'elastic_resource_pool_name'?: string;
    public body?: UpdateElasticResourcePoolRequestBody;
    public constructor(elasticResourcePoolName?: string) { 
        this['elastic_resource_pool_name'] = elasticResourcePoolName;
    }
    public withElasticResourcePoolName(elasticResourcePoolName: string): UpdateElasticResourcePoolRequest {
        this['elastic_resource_pool_name'] = elasticResourcePoolName;
        return this;
    }
    public set elasticResourcePoolName(elasticResourcePoolName: string  | undefined) {
        this['elastic_resource_pool_name'] = elasticResourcePoolName;
    }
    public get elasticResourcePoolName(): string | undefined {
        return this['elastic_resource_pool_name'];
    }
    public withBody(body: UpdateElasticResourcePoolRequestBody): UpdateElasticResourcePoolRequest {
        this['body'] = body;
        return this;
    }
}