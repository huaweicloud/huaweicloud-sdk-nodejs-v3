

export class ShowAppDetailByIdRequest {
    private 'app_id'?: string;
    public constructor(appId?: string) { 
        this['app_id'] = appId;
    }
    public withAppId(appId: string): ShowAppDetailByIdRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
}