

export class ListAppEnvsRequest {
    private 'app_id'?: number;
    private 'x-business-id'?: number;
    public constructor(appId?: number, xBusinessId?: number) { 
        this['app_id'] = appId;
        this['x-business-id'] = xBusinessId;
    }
    public withAppId(appId: number): ListAppEnvsRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: number  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): number | undefined {
        return this['app_id'];
    }
    public withXBusinessId(xBusinessId: number): ListAppEnvsRequest {
        this['x-business-id'] = xBusinessId;
        return this;
    }
    public set xBusinessId(xBusinessId: number  | undefined) {
        this['x-business-id'] = xBusinessId;
    }
    public get xBusinessId(): number | undefined {
        return this['x-business-id'];
    }
}