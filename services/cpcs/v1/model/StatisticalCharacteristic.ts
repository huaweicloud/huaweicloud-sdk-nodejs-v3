

export class StatisticalCharacteristic {
    private 'success_rate'?: number;
    private 'fail_rate'?: number;
    private 'success_count'?: number;
    private 'total_count'?: number;
    private 'average_value'?: number;
    private 'total_value'?: number;
    public constructor() { 
    }
    public withSuccessRate(successRate: number): StatisticalCharacteristic {
        this['success_rate'] = successRate;
        return this;
    }
    public set successRate(successRate: number  | undefined) {
        this['success_rate'] = successRate;
    }
    public get successRate(): number | undefined {
        return this['success_rate'];
    }
    public withFailRate(failRate: number): StatisticalCharacteristic {
        this['fail_rate'] = failRate;
        return this;
    }
    public set failRate(failRate: number  | undefined) {
        this['fail_rate'] = failRate;
    }
    public get failRate(): number | undefined {
        return this['fail_rate'];
    }
    public withSuccessCount(successCount: number): StatisticalCharacteristic {
        this['success_count'] = successCount;
        return this;
    }
    public set successCount(successCount: number  | undefined) {
        this['success_count'] = successCount;
    }
    public get successCount(): number | undefined {
        return this['success_count'];
    }
    public withTotalCount(totalCount: number): StatisticalCharacteristic {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withAverageValue(averageValue: number): StatisticalCharacteristic {
        this['average_value'] = averageValue;
        return this;
    }
    public set averageValue(averageValue: number  | undefined) {
        this['average_value'] = averageValue;
    }
    public get averageValue(): number | undefined {
        return this['average_value'];
    }
    public withTotalValue(totalValue: number): StatisticalCharacteristic {
        this['total_value'] = totalValue;
        return this;
    }
    public set totalValue(totalValue: number  | undefined) {
        this['total_value'] = totalValue;
    }
    public get totalValue(): number | undefined {
        return this['total_value'];
    }
}