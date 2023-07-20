
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SignResponse extends SdkResponse {
    private 'key_id'?: string;
    public signature?: string;
    public constructor() { 
        super();
    }
    public withKeyId(keyId: string): SignResponse {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withSignature(signature: string): SignResponse {
        this['signature'] = signature;
        return this;
    }
}