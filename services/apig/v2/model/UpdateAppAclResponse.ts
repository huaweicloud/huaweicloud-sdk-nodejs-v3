
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAppAclResponse extends SdkResponse {
    private 'app_id'?: string;
    private 'app_acl_type'?: string;
    private 'app_acl_values'?: Array<string>;
    public constructor() { 
        super();
    }
    public withAppId(appId: string): UpdateAppAclResponse {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withAppAclType(appAclType: string): UpdateAppAclResponse {
        this['app_acl_type'] = appAclType;
        return this;
    }
    public set appAclType(appAclType: string  | undefined) {
        this['app_acl_type'] = appAclType;
    }
    public get appAclType(): string | undefined {
        return this['app_acl_type'];
    }
    public withAppAclValues(appAclValues: Array<string>): UpdateAppAclResponse {
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