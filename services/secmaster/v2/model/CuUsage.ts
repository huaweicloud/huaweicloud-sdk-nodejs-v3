import { UsageMetric } from './UsageMetric';


export class CuUsage {
    private 'usage_category'?: CuUsageUsageCategoryEnum | string;
    private 'usage_metric'?: UsageMetric;
    public constructor() { 
    }
    public withUsageCategory(usageCategory: CuUsageUsageCategoryEnum | string): CuUsage {
        this['usage_category'] = usageCategory;
        return this;
    }
    public set usageCategory(usageCategory: CuUsageUsageCategoryEnum | string  | undefined) {
        this['usage_category'] = usageCategory;
    }
    public get usageCategory(): CuUsageUsageCategoryEnum | string | undefined {
        return this['usage_category'];
    }
    public withUsageMetric(usageMetric: UsageMetric): CuUsage {
        this['usage_metric'] = usageMetric;
        return this;
    }
    public set usageMetric(usageMetric: UsageMetric  | undefined) {
        this['usage_metric'] = usageMetric;
    }
    public get usageMetric(): UsageMetric | undefined {
        return this['usage_metric'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CuUsageUsageCategoryEnum {
    USAGE = 'USAGE'
}
