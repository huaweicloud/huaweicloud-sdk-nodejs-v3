

export class CreateCertificateDTO {
    public content: string;
    private 'app_id'?: string | undefined;
    public constructor(content: any) { 
        this['content'] = content;
    }
    public withContent(content: string): CreateCertificateDTO {
        this['content'] = content;
        return this;
    }
    public withAppId(appId: string): CreateCertificateDTO {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string | undefined) {
        this['app_id'] = appId;
    }
    public get appId() {
        return this['app_id'];
    }
}