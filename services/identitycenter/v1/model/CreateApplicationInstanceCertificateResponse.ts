import { CertificateDto } from './CertificateDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateApplicationInstanceCertificateResponse extends SdkResponse {
    private 'application_instance_certificate'?: CertificateDto;
    public constructor() { 
        super();
    }
    public withApplicationInstanceCertificate(applicationInstanceCertificate: CertificateDto): CreateApplicationInstanceCertificateResponse {
        this['application_instance_certificate'] = applicationInstanceCertificate;
        return this;
    }
    public set applicationInstanceCertificate(applicationInstanceCertificate: CertificateDto  | undefined) {
        this['application_instance_certificate'] = applicationInstanceCertificate;
    }
    public get applicationInstanceCertificate(): CertificateDto | undefined {
        return this['application_instance_certificate'];
    }
}