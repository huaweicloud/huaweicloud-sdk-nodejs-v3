import { StatisticalCharacteristic } from './StatisticalCharacteristic';


export class ShowStatusAppItem {
    private 'success_rate'?: number;
    private 'fail_rate'?: number;
    private 'success_count'?: number;
    private 'total_count'?: number;
    private 'average_value'?: number;
    private 'total_value'?: number;
    private 'app_id'?: string;
    private 'app_name'?: string;
    public status?: string;
    public constructor() { 
    }
    public withSuccessRate(successRate: number): ShowStatusAppItem {
        this['success_rate'] = successRate;
        return this;
    }
    public set successRate(successRate: number  | undefined) {
        this['success_rate'] = successRate;
    }
    public get successRate(): number | undefined {
        return this['success_rate'];
    }
    public withFailRate(failRate: number): ShowStatusAppItem {
        this['fail_rate'] = failRate;
        return this;
    }
    public set failRate(failRate: number  | undefined) {
        this['fail_rate'] = failRate;
    }
    public get failRate(): number | undefined {
        return this['fail_rate'];
    }
    public withSuccessCount(successCount: number): ShowStatusAppItem {
        this['success_count'] = successCount;
        return this;
    }
    public set successCount(successCount: number  | undefined) {
        this['success_count'] = successCount;
    }
    public get successCount(): number | undefined {
        return this['success_count'];
    }
    public withTotalCount(totalCount: number): ShowStatusAppItem {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withAverageValue(averageValue: number): ShowStatusAppItem {
        this['average_value'] = averageValue;
        return this;
    }
    public set averageValue(averageValue: number  | undefined) {
        this['average_value'] = averageValue;
    }
    public get averageValue(): number | undefined {
        return this['average_value'];
    }
    public withTotalValue(totalValue: number): ShowStatusAppItem {
        this['total_value'] = totalValue;
        return this;
    }
    public set totalValue(totalValue: number  | undefined) {
        this['total_value'] = totalValue;
    }
    public get totalValue(): number | undefined {
        return this['total_value'];
    }
    public withAppId(appId: string): ShowStatusAppItem {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withAppName(appName: string): ShowStatusAppItem {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withStatus(status: string): ShowStatusAppItem {
        this['status'] = status;
        return this;
    }
}