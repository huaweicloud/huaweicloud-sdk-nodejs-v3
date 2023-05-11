
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateSignatureResponse extends SdkResponse {
    public id?: string;
    private 'signature_id'?: string | undefined;
    private 'signature_name'?: string | undefined;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateSignatureResponse {
        this['id'] = id;
        return this;
    }
    public withSignatureId(signatureId: string): CreateSignatureResponse {
        this['signature_id'] = signatureId;
        return this;
    }
    public set signatureId(signatureId: string | undefined) {
        this['signature_id'] = signatureId;
    }
    public get signatureId() {
        return this['signature_id'];
    }
    public withSignatureName(signatureName: string): CreateSignatureResponse {
        this['signature_name'] = signatureName;
        return this;
    }
    public set signatureName(signatureName: string | undefined) {
        this['signature_name'] = signatureName;
    }
    public get signatureName() {
        return this['signature_name'];
    }
}