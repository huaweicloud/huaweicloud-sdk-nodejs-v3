

export class DeleteTranscodingsTemplateRequest {
    public domain: string;
    private 'app_name': string | undefined;
    public constructor(domain?: any, appName?: any) { 
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
    public set appName(appName: string | undefined) {
        this['app_name'] = appName;
    }
    public get appName() {
        return this['app_name'];
    }
}