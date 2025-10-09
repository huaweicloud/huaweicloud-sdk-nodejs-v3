import { CertificatesResource } from './CertificatesResource';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListElbCertsResponse extends SdkResponse {
    public certificates?: Array<CertificatesResource>;
    public constructor() { 
        super();
    }
    public withCertificates(certificates: Array<CertificatesResource>): ListElbCertsResponse {
        this['certificates'] = certificates;
        return this;
    }
}