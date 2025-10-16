

export class ShowResourceDetailAccessKeyResponseBodyAkList {
    private 'success_rate'?: number;
    private 'fail_rate'?: number;
    private 'success_count'?: number;
    private 'total_count'?: number;
    private 'average_value'?: number;
    private 'total_value'?: number;
    private 'app_id'?: string;
    private 'app_name'?: string;
    private 'access_key_id'?: string;
    private 'access_key_name'?: string;
    public status?: number;
    private 'last_access_time'?: number;
    public constructor() { 
    }
    public withSuccessRate(successRate: number): ShowResourceDetailAccessKeyResponseBodyAkList {
        this['success_rate'] = successRate;
        return this;
    }
    public set successRate(successRate: number  | undefined) {
        this['success_rate'] = successRate;
    }
    public get successRate(): number | undefined {
        return this['success_rate'];
    }
    public withFailRate(failRate: number): ShowResourceDetailAccessKeyResponseBodyAkList {
        this['fail_rate'] = failRate;
        return this;
    }
    public set failRate(failRate: number  | undefined) {
        this['fail_rate'] = failRate;
    }
    public get failRate(): number | undefined {
        return this['fail_rate'];
    }
    public withSuccessCount(successCount: number): ShowResourceDetailAccessKeyResponseBodyAkList {
        this['success_count'] = successCount;
        return this;
    }
    public set successCount(successCount: number  | undefined) {
        this['success_count'] = successCount;
    }
    public get successCount(): number | undefined {
        return this['success_count'];
    }
    public withTotalCount(totalCount: number): ShowResourceDetailAccessKeyResponseBodyAkList {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withAverageValue(averageValue: number): ShowResourceDetailAccessKeyResponseBodyAkList {
        this['average_value'] = averageValue;
        return this;
    }
    public set averageValue(averageValue: number  | undefined) {
        this['average_value'] = averageValue;
    }
    public get averageValue(): number | undefined {
        return this['average_value'];
    }
    public withTotalValue(totalValue: number): ShowResourceDetailAccessKeyResponseBodyAkList {
        this['total_value'] = totalValue;
        return this;
    }
    public set totalValue(totalValue: number  | undefined) {
        this['total_value'] = totalValue;
    }
    public get totalValue(): number | undefined {
        return this['total_value'];
    }
    public withAppId(appId: string): ShowResourceDetailAccessKeyResponseBodyAkList {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withAppName(appName: string): ShowResourceDetailAccessKeyResponseBodyAkList {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withAccessKeyId(accessKeyId: string): ShowResourceDetailAccessKeyResponseBodyAkList {
        this['access_key_id'] = accessKeyId;
        return this;
    }
    public set accessKeyId(accessKeyId: string  | undefined) {
        this['access_key_id'] = accessKeyId;
    }
    public get accessKeyId(): string | undefined {
        return this['access_key_id'];
    }
    public withAccessKeyName(accessKeyName: string): ShowResourceDetailAccessKeyResponseBodyAkList {
        this['access_key_name'] = accessKeyName;
        return this;
    }
    public set accessKeyName(accessKeyName: string  | undefined) {
        this['access_key_name'] = accessKeyName;
    }
    public get accessKeyName(): string | undefined {
        return this['access_key_name'];
    }
    public withStatus(status: number): ShowResourceDetailAccessKeyResponseBodyAkList {
        this['status'] = status;
        return this;
    }
    public withLastAccessTime(lastAccessTime: number): ShowResourceDetailAccessKeyResponseBodyAkList {
        this['last_access_time'] = lastAccessTime;
        return this;
    }
    public set lastAccessTime(lastAccessTime: number  | undefined) {
        this['last_access_time'] = lastAccessTime;
    }
    public get lastAccessTime(): number | undefined {
        return this['last_access_time'];
    }
}