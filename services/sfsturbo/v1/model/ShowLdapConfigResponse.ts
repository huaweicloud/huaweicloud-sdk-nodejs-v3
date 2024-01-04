
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLdapConfigResponse extends SdkResponse {
    public url?: string;
    private 'base_dn'?: string;
    private 'user_dn'?: string;
    private 'filter_condition'?: string;
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
}