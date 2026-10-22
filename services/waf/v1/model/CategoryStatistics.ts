

export class CategoryStatistics {
    private 'category_type'?: CategoryStatisticsCategoryTypeEnum | string;
    private 'total_count'?: number;
    private 'risk_count'?: number;
    public constructor(categoryType?: string, totalCount?: number, riskCount?: number) { 
        this['category_type'] = categoryType;
        this['total_count'] = totalCount;
        this['risk_count'] = riskCount;
    }
    public withCategoryType(categoryType: CategoryStatisticsCategoryTypeEnum | string): CategoryStatistics {
        this['category_type'] = categoryType;
        return this;
    }
    public set categoryType(categoryType: CategoryStatisticsCategoryTypeEnum | string  | undefined) {
        this['category_type'] = categoryType;
    }
    public get categoryType(): CategoryStatisticsCategoryTypeEnum | string | undefined {
        return this['category_type'];
    }
    public withTotalCount(totalCount: number): CategoryStatistics {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withRiskCount(riskCount: number): CategoryStatistics {
        this['risk_count'] = riskCount;
        return this;
    }
    public set riskCount(riskCount: number  | undefined) {
        this['risk_count'] = riskCount;
    }
    public get riskCount(): number | undefined {
        return this['risk_count'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CategoryStatisticsCategoryTypeEnum {
    CONTENT_COMPLIANCE = 'CONTENT_COMPLIANCE',
    PROMPT_INJECTION = 'PROMPT_INJECTION',
    SENSITIVE_CONTENT = 'SENSITIVE_CONTENT'
}
