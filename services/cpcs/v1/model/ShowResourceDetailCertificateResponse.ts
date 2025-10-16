import { ShowResourceDetailCertificateResponseBodyCertificateList } from './ShowResourceDetailCertificateResponseBodyCertificateList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowResourceDetailCertificateResponse extends SdkResponse {
    private 'metric_name'?: string;
    private 'certificate_list'?: Array<ShowResourceDetailCertificateResponseBodyCertificateList>;
    private 'total_count'?: number;
    private 'expired_count'?: number;
    private 'expiring_count'?: number;
    public constructor() { 
        super();
    }
    public withMetricName(metricName: string): ShowResourceDetailCertificateResponse {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withCertificateList(certificateList: Array<ShowResourceDetailCertificateResponseBodyCertificateList>): ShowResourceDetailCertificateResponse {
        this['certificate_list'] = certificateList;
        return this;
    }
    public set certificateList(certificateList: Array<ShowResourceDetailCertificateResponseBodyCertificateList>  | undefined) {
        this['certificate_list'] = certificateList;
    }
    public get certificateList(): Array<ShowResourceDetailCertificateResponseBodyCertificateList> | undefined {
        return this['certificate_list'];
    }
    public withTotalCount(totalCount: number): ShowResourceDetailCertificateResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withExpiredCount(expiredCount: number): ShowResourceDetailCertificateResponse {
        this['expired_count'] = expiredCount;
        return this;
    }
    public set expiredCount(expiredCount: number  | undefined) {
        this['expired_count'] = expiredCount;
    }
    public get expiredCount(): number | undefined {
        return this['expired_count'];
    }
    public withExpiringCount(expiringCount: number): ShowResourceDetailCertificateResponse {
        this['expiring_count'] = expiringCount;
        return this;
    }
    public set expiringCount(expiringCount: number  | undefined) {
        this['expiring_count'] = expiringCount;
    }
    public get expiringCount(): number | undefined {
        return this['expiring_count'];
    }
}