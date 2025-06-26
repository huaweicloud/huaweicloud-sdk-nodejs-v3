

export class CreatePeriodElasticResourcePoolSpecChangeOrderRequestBody {
    private 'elastic_resource_pool_name'?: string;
    private 'target_cu'?: number;
    public constructor(elasticResourcePoolName?: string, targetCu?: number) { 
        this['elastic_resource_pool_name'] = elasticResourcePoolName;
        this['target_cu'] = targetCu;
    }
    public withElasticResourcePoolName(elasticResourcePoolName: string): CreatePeriodElasticResourcePoolSpecChangeOrderRequestBody {
        this['elastic_resource_pool_name'] = elasticResourcePoolName;
        return this;
    }
    public set elasticResourcePoolName(elasticResourcePoolName: string  | undefined) {
        this['elastic_resource_pool_name'] = elasticResourcePoolName;
    }
    public get elasticResourcePoolName(): string | undefined {
        return this['elastic_resource_pool_name'];
    }
    public withTargetCu(targetCu: number): CreatePeriodElasticResourcePoolSpecChangeOrderRequestBody {
        this['target_cu'] = targetCu;
        return this;
    }
    public set targetCu(targetCu: number  | undefined) {
        this['target_cu'] = targetCu;
    }
    public get targetCu(): number | undefined {
        return this['target_cu'];
    }
}