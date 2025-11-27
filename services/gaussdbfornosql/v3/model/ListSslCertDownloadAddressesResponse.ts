import { CertInfo } from './CertInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSslCertDownloadAddressesResponse extends SdkResponse {
    public certs?: Array<CertInfo>;
    public constructor() { 
        super();
    }
    public withCerts(certs: Array<CertInfo>): ListSslCertDownloadAddressesResponse {
        this['certs'] = certs;
        return this;
    }
}