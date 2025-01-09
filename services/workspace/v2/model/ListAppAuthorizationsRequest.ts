

export class ListAppAuthorizationsRequest {
    public offset?: number;
    public limit?: number;
    private 'app_id'?: string;
    public name?: string;
    private 'target_type'?: string;
    public constructor(appId?: string) { 
        this['app_id'] = appId;
    }
    public withOffset(offset: number): ListAppAuthorizationsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAppAuthorizationsRequest {
        this['limit'] = limit;
        return this;
    }
    public withAppId(appId: string): ListAppAuthorizationsRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withName(name: string): ListAppAuthorizationsRequest {
        this['name'] = name;
        return this;
    }
    public withTargetType(targetType: string): ListAppAuthorizationsRequest {
        this['target_type'] = targetType;
        return this;
    }
    public set targetType(targetType: string  | undefined) {
        this['target_type'] = targetType;
    }
    public get targetType(): string | undefined {
        return this['target_type'];
    }
}