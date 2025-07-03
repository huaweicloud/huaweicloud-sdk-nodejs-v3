

export class TxItemVo {
    private 'app_name'?: string;
    private 'env_name'?: string;
    private 'tx_display_name'?: string;
    private 'business_id'?: number;
    private 'env_id'?: number;
    private 'app_id'?: number;
    private 'tx_name'?: string;
    private 'invoke_count'?: number;
    private 'total_time'?: number;
    private 'error_count'?: number;
    public constructor() { 
    }
    public withAppName(appName: string): TxItemVo {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withEnvName(envName: string): TxItemVo {
        this['env_name'] = envName;
        return this;
    }
    public set envName(envName: string  | undefined) {
        this['env_name'] = envName;
    }
    public get envName(): string | undefined {
        return this['env_name'];
    }
    public withTxDisplayName(txDisplayName: string): TxItemVo {
        this['tx_display_name'] = txDisplayName;
        return this;
    }
    public set txDisplayName(txDisplayName: string  | undefined) {
        this['tx_display_name'] = txDisplayName;
    }
    public get txDisplayName(): string | undefined {
        return this['tx_display_name'];
    }
    public withBusinessId(businessId: number): TxItemVo {
        this['business_id'] = businessId;
        return this;
    }
    public set businessId(businessId: number  | undefined) {
        this['business_id'] = businessId;
    }
    public get businessId(): number | undefined {
        return this['business_id'];
    }
    public withEnvId(envId: number): TxItemVo {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: number  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): number | undefined {
        return this['env_id'];
    }
    public withAppId(appId: number): TxItemVo {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: number  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): number | undefined {
        return this['app_id'];
    }
    public withTxName(txName: string): TxItemVo {
        this['tx_name'] = txName;
        return this;
    }
    public set txName(txName: string  | undefined) {
        this['tx_name'] = txName;
    }
    public get txName(): string | undefined {
        return this['tx_name'];
    }
    public withInvokeCount(invokeCount: number): TxItemVo {
        this['invoke_count'] = invokeCount;
        return this;
    }
    public set invokeCount(invokeCount: number  | undefined) {
        this['invoke_count'] = invokeCount;
    }
    public get invokeCount(): number | undefined {
        return this['invoke_count'];
    }
    public withTotalTime(totalTime: number): TxItemVo {
        this['total_time'] = totalTime;
        return this;
    }
    public set totalTime(totalTime: number  | undefined) {
        this['total_time'] = totalTime;
    }
    public get totalTime(): number | undefined {
        return this['total_time'];
    }
    public withErrorCount(errorCount: number): TxItemVo {
        this['error_count'] = errorCount;
        return this;
    }
    public set errorCount(errorCount: number  | undefined) {
        this['error_count'] = errorCount;
    }
    public get errorCount(): number | undefined {
        return this['error_count'];
    }
}