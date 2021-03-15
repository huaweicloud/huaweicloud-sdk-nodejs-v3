import { CertificatesRspDTO } from './CertificatesRspDTO';
import { Page } from './Page';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCertificatesResponse extends SdkResponse {
    public certificates?: Array<CertificatesRspDTO>;
    public page?: Page;
    public constructor() { 
        super();
    }
    public withCertificates(certificates: Array<CertificatesRspDTO>): ListCertificatesResponse {
        this['certificates'] = certificates;
        return this;
    }
    public withPage(page: Page): ListCertificatesResponse {
        this['page'] = page;
        return this;
    }
}