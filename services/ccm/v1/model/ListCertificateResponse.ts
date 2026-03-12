import { Certificates } from './Certificates';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCertificateResponse extends SdkResponse {
    public total?: number;
    public certificates?: Array<Certificates>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListCertificateResponse {
        this['total'] = total;
        return this;
    }
    public withCertificates(certificates: Array<Certificates>): ListCertificateResponse {
        this['certificates'] = certificates;
        return this;
    }
}