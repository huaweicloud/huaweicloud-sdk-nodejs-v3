
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CancelCertificateRequestResponse extends SdkResponse {
    private 'cert_id'?: string;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCertId(certId: string): CancelCertificateRequestResponse {
        this['cert_id'] = certId;
        return this;
    }
    public set certId(certId: string  | undefined) {
        this['cert_id'] = certId;
    }
    public get certId(): string | undefined {
        return this['cert_id'];
    }
    public withMessage(message: string): CancelCertificateRequestResponse {
        this['message'] = message;
        return this;
    }
}