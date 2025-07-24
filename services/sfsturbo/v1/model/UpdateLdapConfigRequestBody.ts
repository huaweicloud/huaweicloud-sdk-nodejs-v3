

export class UpdateLdapConfigRequestBody {
    public url?: string;
    private 'base_dn'?: string;
    private 'user_dn'?: string;
    public password?: string;
    private 'vpc_id'?: string;
    private 'filter_condition'?: string;
    private 'backup_url'?: string;
    public schema?: string;
    private 'search_timeout'?: number;
    public constructor() { 
    }
    public withUrl(url: string): UpdateLdapConfigRequestBody {
        this['url'] = url;
        return this;
    }
    public withBaseDn(baseDn: string): UpdateLdapConfigRequestBody {
        this['base_dn'] = baseDn;
        return this;
    }
    public set baseDn(baseDn: string  | undefined) {
        this['base_dn'] = baseDn;
    }
    public get baseDn(): string | undefined {
        return this['base_dn'];
    }
    public withUserDn(userDn: string): UpdateLdapConfigRequestBody {
        this['user_dn'] = userDn;
        return this;
    }
    public set userDn(userDn: string  | undefined) {
        this['user_dn'] = userDn;
    }
    public get userDn(): string | undefined {
        return this['user_dn'];
    }
    public withPassword(password: string): UpdateLdapConfigRequestBody {
        this['password'] = password;
        return this;
    }
    public withVpcId(vpcId: string): UpdateLdapConfigRequestBody {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withFilterCondition(filterCondition: string): UpdateLdapConfigRequestBody {
        this['filter_condition'] = filterCondition;
        return this;
    }
    public set filterCondition(filterCondition: string  | undefined) {
        this['filter_condition'] = filterCondition;
    }
    public get filterCondition(): string | undefined {
        return this['filter_condition'];
    }
    public withBackupUrl(backupUrl: string): UpdateLdapConfigRequestBody {
        this['backup_url'] = backupUrl;
        return this;
    }
    public set backupUrl(backupUrl: string  | undefined) {
        this['backup_url'] = backupUrl;
    }
    public get backupUrl(): string | undefined {
        return this['backup_url'];
    }
    public withSchema(schema: string): UpdateLdapConfigRequestBody {
        this['schema'] = schema;
        return this;
    }
    public withSearchTimeout(searchTimeout: number): UpdateLdapConfigRequestBody {
        this['search_timeout'] = searchTimeout;
        return this;
    }
    public set searchTimeout(searchTimeout: number  | undefined) {
        this['search_timeout'] = searchTimeout;
    }
    public get searchTimeout(): number | undefined {
        return this['search_timeout'];
    }
}