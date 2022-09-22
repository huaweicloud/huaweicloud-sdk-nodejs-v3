import { CertificateBody } from './CertificateBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCertificatesResponse extends SdkResponse {
    public items?: Array<CertificateBody>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withItems(items: Array<CertificateBody>): ListCertificatesResponse {
        this['items'] = items;
        return this;
    }
    public withTotal(total: number): ListCertificatesResponse {
        this['total'] = total;
        return this;
    }
}