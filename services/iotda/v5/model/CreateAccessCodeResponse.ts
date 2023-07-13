
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAccessCodeResponse extends SdkResponse {
    private 'access_key'?: string | undefined;
    private 'access_code'?: string | undefined;
    public constructor() { 
        super();
    }
    public withAccessKey(accessKey: string): CreateAccessCodeResponse {
        this['access_key'] = accessKey;
        return this;
    }
    public set accessKey(accessKey: string | undefined) {
        this['access_key'] = accessKey;
    }
    public get accessKey() {
        return this['access_key'];
    }
    public withAccessCode(accessCode: string): CreateAccessCodeResponse {
        this['access_code'] = accessCode;
        return this;
    }
    public set accessCode(accessCode: string | undefined) {
        this['access_code'] = accessCode;
    }
    public get accessCode() {
        return this['access_code'];
    }
}