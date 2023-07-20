
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCertKeyResponse extends SdkResponse {
    public cert?: string;
    private 'private_key'?: string;
    public constructor() { 
        super();
    }
    public withCert(cert: string): ShowCertKeyResponse {
        this['cert'] = cert;
        return this;
    }
    public withPrivateKey(privateKey: string): ShowCertKeyResponse {
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