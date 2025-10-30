
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ValidateAdminResponse extends SdkResponse {
    private 'is_admin_account'?: boolean;
    public constructor() { 
        super();
    }
    public withIsAdminAccount(isAdminAccount: boolean): ValidateAdminResponse {
        this['is_admin_account'] = isAdminAccount;
        return this;
    }
    public set isAdminAccount(isAdminAccount: boolean  | undefined) {
        this['is_admin_account'] = isAdminAccount;
    }
    public get isAdminAccount(): boolean | undefined {
        return this['is_admin_account'];
    }
}