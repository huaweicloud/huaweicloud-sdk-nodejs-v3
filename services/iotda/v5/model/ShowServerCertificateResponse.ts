
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowServerCertificateResponse extends SdkResponse {
    private 'server_certificate_id'?: string;
    private 'common_name'?: string;
    private 'certificate_pem'?: string;
    private 'effective_date'?: string;
    private 'expiry_date'?: string;
    private 'certificate_owner'?: string;
    private 'certificate_issuer'?: string;
    public constructor() { 
        super();
    }
    public withServerCertificateId(serverCertificateId: string): ShowServerCertificateResponse {
        this['server_certificate_id'] = serverCertificateId;
        return this;
    }
    public set serverCertificateId(serverCertificateId: string  | undefined) {
        this['server_certificate_id'] = serverCertificateId;
    }
    public get serverCertificateId(): string | undefined {
        return this['server_certificate_id'];
    }
    public withCommonName(commonName: string): ShowServerCertificateResponse {
        this['common_name'] = commonName;
        return this;
    }
    public set commonName(commonName: string  | undefined) {
        this['common_name'] = commonName;
    }
    public get commonName(): string | undefined {
        return this['common_name'];
    }
    public withCertificatePem(certificatePem: string): ShowServerCertificateResponse {
        this['certificate_pem'] = certificatePem;
        return this;
    }
    public set certificatePem(certificatePem: string  | undefined) {
        this['certificate_pem'] = certificatePem;
    }
    public get certificatePem(): string | undefined {
        return this['certificate_pem'];
    }
    public withEffectiveDate(effectiveDate: string): ShowServerCertificateResponse {
        this['effective_date'] = effectiveDate;
        return this;
    }
    public set effectiveDate(effectiveDate: string  | undefined) {
        this['effective_date'] = effectiveDate;
    }
    public get effectiveDate(): string | undefined {
        return this['effective_date'];
    }
    public withExpiryDate(expiryDate: string): ShowServerCertificateResponse {
        this['expiry_date'] = expiryDate;
        return this;
    }
    public set expiryDate(expiryDate: string  | undefined) {
        this['expiry_date'] = expiryDate;
    }
    public get expiryDate(): string | undefined {
        return this['expiry_date'];
    }
    public withCertificateOwner(certificateOwner: string): ShowServerCertificateResponse {
        this['certificate_owner'] = certificateOwner;
        return this;
    }
    public set certificateOwner(certificateOwner: string  | undefined) {
        this['certificate_owner'] = certificateOwner;
    }
    public get certificateOwner(): string | undefined {
        return this['certificate_owner'];
    }
    public withCertificateIssuer(certificateIssuer: string): ShowServerCertificateResponse {
        this['certificate_issuer'] = certificateIssuer;
        return this;
    }
    public set certificateIssuer(certificateIssuer: string  | undefined) {
        this['certificate_issuer'] = certificateIssuer;
    }
    public get certificateIssuer(): string | undefined {
        return this['certificate_issuer'];
    }
}