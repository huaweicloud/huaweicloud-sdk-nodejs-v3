
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExportCertificateAuthorityCsrResponse extends SdkResponse {
    public csr?: string;
    public constructor() { 
        super();
    }
    public withCsr(csr: string): ExportCertificateAuthorityCsrResponse {
        this['csr'] = csr;
        return this;
    }
}