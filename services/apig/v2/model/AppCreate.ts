

export class AppCreate {
    public name?: string;
    public remark?: string;
    private 'app_key'?: string;
    private 'app_secret'?: string;
    private 'related_domain_id'?: string;
    private 'related_project_id'?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): AppCreate {
        this['name'] = name;
        return this;
    }
    public withRemark(remark: string): AppCreate {
        this['remark'] = remark;
        return this;
    }
    public withAppKey(appKey: string): AppCreate {
        this['app_key'] = appKey;
        return this;
    }
    public set appKey(appKey: string  | undefined) {
        this['app_key'] = appKey;
    }
    public get appKey(): string | undefined {
        return this['app_key'];
    }
    public withAppSecret(appSecret: string): AppCreate {
        this['app_secret'] = appSecret;
        return this;
    }
    public set appSecret(appSecret: string  | undefined) {
        this['app_secret'] = appSecret;
    }
    public get appSecret(): string | undefined {
        return this['app_secret'];
    }
    public withRelatedDomainId(relatedDomainId: string): AppCreate {
        this['related_domain_id'] = relatedDomainId;
        return this;
    }
    public set relatedDomainId(relatedDomainId: string  | undefined) {
        this['related_domain_id'] = relatedDomainId;
    }
    public get relatedDomainId(): string | undefined {
        return this['related_domain_id'];
    }
    public withRelatedProjectId(relatedProjectId: string): AppCreate {
        this['related_project_id'] = relatedProjectId;
        return this;
    }
    public set relatedProjectId(relatedProjectId: string  | undefined) {
        this['related_project_id'] = relatedProjectId;
    }
    public get relatedProjectId(): string | undefined {
        return this['related_project_id'];
    }
}