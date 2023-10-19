

export class AppAclCreate {
    private 'app_acl_type'?: string;
    private 'app_acl_values'?: Array<string>;
    public constructor(appAclType?: string, appAclValues?: Array<string>) { 
        this['app_acl_type'] = appAclType;
        this['app_acl_values'] = appAclValues;
    }
    public withAppAclType(appAclType: string): AppAclCreate {
        this['app_acl_type'] = appAclType;
        return this;
    }
    public set appAclType(appAclType: string  | undefined) {
        this['app_acl_type'] = appAclType;
    }
    public get appAclType(): string | undefined {
        return this['app_acl_type'];
    }
    public withAppAclValues(appAclValues: Array<string>): AppAclCreate {
        this['app_acl_values'] = appAclValues;
        return this;
    }
    public set appAclValues(appAclValues: Array<string>  | undefined) {
        this['app_acl_values'] = appAclValues;
    }
    public get appAclValues(): Array<string> | undefined {
        return this['app_acl_values'];
    }
}