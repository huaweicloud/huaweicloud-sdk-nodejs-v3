

export class AttachServerAppInfo {
    public id?: string;
    private 'app_id'?: string;
    public constructor() { 
    }
    public withId(id: string): AttachServerAppInfo {
        this['id'] = id;
        return this;
    }
    public withAppId(appId: string): AttachServerAppInfo {
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