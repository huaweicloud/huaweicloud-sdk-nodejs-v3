
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ValidateWeakPasswordResponse extends SdkResponse {
    private 'is_weak_password'?: boolean;
    public constructor() { 
        super();
    }
    public withIsWeakPassword(isWeakPassword: boolean): ValidateWeakPasswordResponse {
        this['is_weak_password'] = isWeakPassword;
        return this;
    }
    public set isWeakPassword(isWeakPassword: boolean  | undefined) {
        this['is_weak_password'] = isWeakPassword;
    }
    public get isWeakPassword(): boolean | undefined {
        return this['is_weak_password'];
    }
}