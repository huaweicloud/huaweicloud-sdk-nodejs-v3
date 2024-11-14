
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLdapConfigResponse extends SdkResponse {
    public url?: string;
    private 'base_dn'?: string;
    private 'user_dn'?: string;
    private 'filter_condition'?: string;
    private 'backup_url'?: string;
    public schema?: string;
    private 'search_timeout'?: number;
    private 'allow_local_user'?: string;
    public constructor() { 
        super();
    }
    public withUrl(url: string): ShowLdapConfigResponse {
        this['url'] = url;
        return this;
    }
    public withBaseDn(baseDn: string): ShowLdapConfigResponse {
        this['base_dn'] = baseDn;
        return this;
    }
    public set baseDn(baseDn: string  | undefined) {
        this['base_dn'] = baseDn;
    }
    public get baseDn(): string | undefined {
        return this['base_dn'];
    }
    public withUserDn(userDn: string): ShowLdapConfigResponse {
        this['user_dn'] = userDn;
        return this;
    }
    public set userDn(userDn: string  | undefined) {
        this['user_dn'] = userDn;
    }
    public get userDn(): string | undefined {
        return this['user_dn'];
    }
    public withFilterCondition(filterCondition: string): ShowLdapConfigResponse {
        this['filter_condition'] = filterCondition;
        return this;
    }
    public set filterCondition(filterCondition: string  | undefined) {
        this['filter_condition'] = filterCondition;
    }
    public get filterCondition(): string | undefined {
        return this['filter_condition'];
    }
    public withBackupUrl(backupUrl: string): ShowLdapConfigResponse {
        this['backup_url'] = backupUrl;
        return this;
    }
    public set backupUrl(backupUrl: string  | undefined) {
        this['backup_url'] = backupUrl;
    }
    public get backupUrl(): string | undefined {
        return this['backup_url'];
    }
    public withSchema(schema: string): ShowLdapConfigResponse {
        this['schema'] = schema;
        return this;
    }
    public withSearchTimeout(searchTimeout: number): ShowLdapConfigResponse {
        this['search_timeout'] = searchTimeout;
        return this;
    }
    public set searchTimeout(searchTimeout: number  | undefined) {
        this['search_timeout'] = searchTimeout;
    }
    public get searchTimeout(): number | undefined {
        return this['search_timeout'];
    }
    public withAllowLocalUser(allowLocalUser: string): ShowLdapConfigResponse {
        this['allow_local_user'] = allowLocalUser;
        return this;
    }
    public set allowLocalUser(allowLocalUser: string  | undefined) {
        this['allow_local_user'] = allowLocalUser;
    }
    public get allowLocalUser(): string | undefined {
        return this['allow_local_user'];
    }
}