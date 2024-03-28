

export class DisassociateQueueFromEnhancedConnectionRequestBody {
    public queues?: Array<string>;
    private 'elastic_resource_pools'?: Array<string>;
    public constructor() { 
    }
    public withQueues(queues: Array<string>): DisassociateQueueFromEnhancedConnectionRequestBody {
        this['queues'] = queues;
        return this;
    }
    public withElasticResourcePools(elasticResourcePools: Array<string>): DisassociateQueueFromEnhancedConnectionRequestBody {
        this['elastic_resource_pools'] = elasticResourcePools;
        return this;
    }
    public set elasticResourcePools(elasticResourcePools: Array<string>  | undefined) {
        this['elastic_resource_pools'] = elasticResourcePools;
    }
    public get elasticResourcePools(): Array<string> | undefined {
        return this['elastic_resource_pools'];
    }
}