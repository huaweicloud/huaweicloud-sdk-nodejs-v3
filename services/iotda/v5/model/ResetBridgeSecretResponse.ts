
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ResetBridgeSecretResponse extends SdkResponse {
    private 'bridge_id'?: string;
    public secret?: string;
    public constructor() { 
        super();
    }
    public withBridgeId(bridgeId: string): ResetBridgeSecretResponse {
        this['bridge_id'] = bridgeId;
        return this;
    }
    public set bridgeId(bridgeId: string  | undefined) {
        this['bridge_id'] = bridgeId;
    }
    public get bridgeId(): string | undefined {
        return this['bridge_id'];
    }
    public withSecret(secret: string): ResetBridgeSecretResponse {
        this['secret'] = secret;
        return this;
    }
}