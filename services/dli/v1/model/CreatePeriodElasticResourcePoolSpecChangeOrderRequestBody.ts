

export class CreatePeriodElasticResourcePoolSpecChangeOrderRequestBody {
    private 'elastic_resource_pool_name'?: string;
    private 'cloud_service_console_url'?: string;
    private 'promotion_info'?: string;
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
    public withCloudServiceConsoleUrl(cloudServiceConsoleUrl: string): CreatePeriodElasticResourcePoolSpecChangeOrderRequestBody {
        this['cloud_service_console_url'] = cloudServiceConsoleUrl;
        return this;
    }
    public set cloudServiceConsoleUrl(cloudServiceConsoleUrl: string  | undefined) {
        this['cloud_service_console_url'] = cloudServiceConsoleUrl;
    }
    public get cloudServiceConsoleUrl(): string | undefined {
        return this['cloud_service_console_url'];
    }
    public withPromotionInfo(promotionInfo: string): CreatePeriodElasticResourcePoolSpecChangeOrderRequestBody {
        this['promotion_info'] = promotionInfo;
        return this;
    }
    public set promotionInfo(promotionInfo: string  | undefined) {
        this['promotion_info'] = promotionInfo;
    }
    public get promotionInfo(): string | undefined {
        return this['promotion_info'];
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