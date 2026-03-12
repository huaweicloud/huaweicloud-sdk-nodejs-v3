import { CertificateDetail } from './CertificateDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCertificatesResponse extends SdkResponse {
    public certificates?: Array<CertificateDetail>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withCertificates(certificates: Array<CertificateDetail>): ListCertificatesResponse {
        this['certificates'] = certificates;
        return this;
    }
    public withTotalCount(totalCount: number): ListCertificatesResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}