
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAppAccessKeyResponse extends SdkResponse {
    private 'access_key_id'?: string;
    public constructor() { 
        super();
    }
    public withAccessKeyId(accessKeyId: string): CreateAppAccessKeyResponse {
        this['access_key_id'] = accessKeyId;
        return this;
    }
    public set accessKeyId(accessKeyId: string  | undefined) {
        this['access_key_id'] = accessKeyId;
    }
    public get accessKeyId(): string | undefined {
        return this['access_key_id'];
    }
}