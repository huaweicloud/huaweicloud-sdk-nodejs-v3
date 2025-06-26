

export class ListWarehouseAppsRequest {
    public limit?: number;
    public offset?: number;
    private 'verify_status'?: string;
    private 'app_id'?: string;
    private 'app_name'?: string;
    private 'app_category'?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListWarehouseAppsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListWarehouseAppsRequest {
        this['offset'] = offset;
        return this;
    }
    public withVerifyStatus(verifyStatus: string): ListWarehouseAppsRequest {
        this['verify_status'] = verifyStatus;
        return this;
    }
    public set verifyStatus(verifyStatus: string  | undefined) {
        this['verify_status'] = verifyStatus;
    }
    public get verifyStatus(): string | undefined {
        return this['verify_status'];
    }
    public withAppId(appId: string): ListWarehouseAppsRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withAppName(appName: string): ListWarehouseAppsRequest {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withAppCategory(appCategory: string): ListWarehouseAppsRequest {
        this['app_category'] = appCategory;
        return this;
    }
    public set appCategory(appCategory: string  | undefined) {
        this['app_category'] = appCategory;
    }
    public get appCategory(): string | undefined {
        return this['app_category'];
    }
}