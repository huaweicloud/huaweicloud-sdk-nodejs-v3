
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RotateOnDemandResponse extends SdkResponse {
    private 'key_id'?: string;
    public constructor() { 
        super();
    }
    public withKeyId(keyId: string): RotateOnDemandResponse {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
}