import { VendorCertificateStatistic } from './VendorCertificateStatistic';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowStatisticCertificateResponse extends SdkResponse {
    private 'metric_name'?: string;
    private 'certificate_classified_counts'?: Array<VendorCertificateStatistic>;
    private 'certificate_counts_by_server_type'?: Array<VendorCertificateStatistic>;
    public constructor() { 
        super();
    }
    public withMetricName(metricName: string): ShowStatisticCertificateResponse {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withCertificateClassifiedCounts(certificateClassifiedCounts: Array<VendorCertificateStatistic>): ShowStatisticCertificateResponse {
        this['certificate_classified_counts'] = certificateClassifiedCounts;
        return this;
    }
    public set certificateClassifiedCounts(certificateClassifiedCounts: Array<VendorCertificateStatistic>  | undefined) {
        this['certificate_classified_counts'] = certificateClassifiedCounts;
    }
    public get certificateClassifiedCounts(): Array<VendorCertificateStatistic> | undefined {
        return this['certificate_classified_counts'];
    }
    public withCertificateCountsByServerType(certificateCountsByServerType: Array<VendorCertificateStatistic>): ShowStatisticCertificateResponse {
        this['certificate_counts_by_server_type'] = certificateCountsByServerType;
        return this;
    }
    public set certificateCountsByServerType(certificateCountsByServerType: Array<VendorCertificateStatistic>  | undefined) {
        this['certificate_counts_by_server_type'] = certificateCountsByServerType;
    }
    public get certificateCountsByServerType(): Array<VendorCertificateStatistic> | undefined {
        return this['certificate_counts_by_server_type'];
    }
}