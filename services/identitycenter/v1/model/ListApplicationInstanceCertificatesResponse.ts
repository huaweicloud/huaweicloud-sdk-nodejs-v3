import { CertificateDto } from './CertificateDto';
import { PageInfoDto } from './PageInfoDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApplicationInstanceCertificatesResponse extends SdkResponse {
    private 'application_instance_certificates'?: Array<CertificateDto>;
    private 'page_info'?: PageInfoDto;
    public constructor() { 
        super();
    }
    public withApplicationInstanceCertificates(applicationInstanceCertificates: Array<CertificateDto>): ListApplicationInstanceCertificatesResponse {
        this['application_instance_certificates'] = applicationInstanceCertificates;
        return this;
    }
    public set applicationInstanceCertificates(applicationInstanceCertificates: Array<CertificateDto>  | undefined) {
        this['application_instance_certificates'] = applicationInstanceCertificates;
    }
    public get applicationInstanceCertificates(): Array<CertificateDto> | undefined {
        return this['application_instance_certificates'];
    }
    public withPageInfo(pageInfo: PageInfoDto): ListApplicationInstanceCertificatesResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfoDto  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfoDto | undefined {
        return this['page_info'];
    }
}