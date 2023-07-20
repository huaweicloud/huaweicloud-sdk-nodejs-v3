
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ValidateSignatureResponse extends SdkResponse {
    private 'key_id'?: string;
    private 'signature_valid'?: string;
    public constructor() { 
        super();
    }
    public withKeyId(keyId: string): ValidateSignatureResponse {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withSignatureValid(signatureValid: string): ValidateSignatureResponse {
        this['signature_valid'] = signatureValid;
        return this;
    }
    public set signatureValid(signatureValid: string  | undefined) {
        this['signature_valid'] = signatureValid;
    }
    public get signatureValid(): string | undefined {
        return this['signature_valid'];
    }
}