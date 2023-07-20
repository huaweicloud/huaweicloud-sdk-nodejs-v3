import { AssociateQueueToElasticResourcePoolRequestBody } from './AssociateQueueToElasticResourcePoolRequestBody';


export class AssociateQueueToElasticResourcePoolRequest {
    private 'elastic_resource_pool_name'?: string;
    public body?: AssociateQueueToElasticResourcePoolRequestBody;
    public constructor(elasticResourcePoolName?: string) { 
        this['elastic_resource_pool_name'] = elasticResourcePoolName;
    }
    public withElasticResourcePoolName(elasticResourcePoolName: string): AssociateQueueToElasticResourcePoolRequest {
        this['elastic_resource_pool_name'] = elasticResourcePoolName;
        return this;
    }
    public set elasticResourcePoolName(elasticResourcePoolName: string  | undefined) {
        this['elastic_resource_pool_name'] = elasticResourcePoolName;
    }
    public get elasticResourcePoolName(): string | undefined {
        return this['elastic_resource_pool_name'];
    }
    public withBody(body: AssociateQueueToElasticResourcePoolRequestBody): AssociateQueueToElasticResourcePoolRequest {
        this['body'] = body;
        return this;
    }
}