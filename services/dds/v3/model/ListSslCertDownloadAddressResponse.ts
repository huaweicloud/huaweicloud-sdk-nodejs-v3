import { CertInfo } from './CertInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSslCertDownloadAddressResponse extends SdkResponse {
    public certs?: Array<CertInfo>;
    public constructor() { 
        super();
    }
    public withCerts(certs: Array<CertInfo>): ListSslCertDownloadAddressResponse {
        this['certs'] = certs;
        return this;
    }
}