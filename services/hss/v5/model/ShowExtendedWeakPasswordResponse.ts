
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowExtendedWeakPasswordResponse extends SdkResponse {
    private 'extended_weak_password'?: Array<string>;
    public constructor() { 
        super();
    }
    public withExtendedWeakPassword(extendedWeakPassword: Array<string>): ShowExtendedWeakPasswordResponse {
        this['extended_weak_password'] = extendedWeakPassword;
        return this;
    }
    public set extendedWeakPassword(extendedWeakPassword: Array<string>  | undefined) {
        this['extended_weak_password'] = extendedWeakPassword;
    }
    public get extendedWeakPassword(): Array<string> | undefined {
        return this['extended_weak_password'];
    }
}