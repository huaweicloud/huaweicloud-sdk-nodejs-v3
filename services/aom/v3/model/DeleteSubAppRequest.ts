

export class DeleteSubAppRequest {
    private 'sub_app_id'?: string;
    public constructor(subAppId?: string) { 
        this['sub_app_id'] = subAppId;
    }
    public withSubAppId(subAppId: string): DeleteSubAppRequest {
        this['sub_app_id'] = subAppId;
        return this;
    }
    public set subAppId(subAppId: string  | undefined) {
        this['sub_app_id'] = subAppId;
    }
    public get subAppId(): string | undefined {
        return this['sub_app_id'];
    }
}