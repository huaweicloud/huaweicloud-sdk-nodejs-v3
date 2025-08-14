
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ImportExternalIdPCertificateResponse extends SdkResponse {
    private 'certificate_id'?: string;
    public constructor() { 
        super();
    }
    public withCertificateId(certificateId: string): ImportExternalIdPCertificateResponse {
        this['certificate_id'] = certificateId;
        return this;
    }
    public set certificateId(certificateId: string  | undefined) {
        this['certificate_id'] = certificateId;
    }
    public get certificateId(): string | undefined {
        return this['certificate_id'];
    }
}