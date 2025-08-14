import { IdpCertificate } from './IdpCertificate';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListExternalIdPCertificatesResponse extends SdkResponse {
    private 'idp_certificates'?: Array<IdpCertificate>;
    public constructor() { 
        super();
    }
    public withIdpCertificates(idpCertificates: Array<IdpCertificate>): ListExternalIdPCertificatesResponse {
        this['idp_certificates'] = idpCertificates;
        return this;
    }
    public set idpCertificates(idpCertificates: Array<IdpCertificate>  | undefined) {
        this['idp_certificates'] = idpCertificates;
    }
    public get idpCertificates(): Array<IdpCertificate> | undefined {
        return this['idp_certificates'];
    }
}