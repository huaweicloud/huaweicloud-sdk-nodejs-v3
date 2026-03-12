
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCsrPrivateKeyResponse extends SdkResponse {
    private 'private_key'?: string;
    public constructor() { 
        super();
    }
    public withPrivateKey(privateKey: string): ShowCsrPrivateKeyResponse {
        this['private_key'] = privateKey;
        return this;
    }
    public set privateKey(privateKey: string  | undefined) {
        this['private_key'] = privateKey;
    }
    public get privateKey(): string | undefined {
        return this['private_key'];
    }
}