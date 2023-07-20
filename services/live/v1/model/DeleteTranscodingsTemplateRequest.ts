

export class DeleteTranscodingsTemplateRequest {
    public domain?: string;
    private 'app_name'?: string;
    public constructor(domain?: string, appName?: string) { 
        this['domain'] = domain;
        this['app_name'] = appName;
    }
    public withDomain(domain: string): DeleteTranscodingsTemplateRequest {
        this['domain'] = domain;
        return this;
    }
    public withAppName(appName: string): DeleteTranscodingsTemplateRequest {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
}