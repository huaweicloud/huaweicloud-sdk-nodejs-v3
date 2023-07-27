import { BasePage } from './BasePage';
import { CertBase } from './CertBase';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCertificatesV2Response extends SdkResponse {
    public size?: number;
    public total?: number;
    public certs?: Array<CertBase>;
    public constructor(size?: number, total?: number) { 
        super();
        this['size'] = size;
        this['total'] = total;
    }
    public withSize(size: number): ListCertificatesV2Response {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListCertificatesV2Response {
        this['total'] = total;
        return this;
    }
    public withCerts(certs: Array<CertBase>): ListCertificatesV2Response {
        this['certs'] = certs;
        return this;
    }
}