
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDeviceCertificateResponse extends SdkResponse {
    private 'certificate_id'?: string;
    private 'common_name'?: string;
    private 'expiry_date'?: string;
    public fingerprint?: string;
    public status?: string;
    private 'certificate_pem'?: string;
    public constructor() { 
        super();
    }
    public withCertificateId(certificateId: string): ShowDeviceCertificateResponse {
        this['certificate_id'] = certificateId;
        return this;
    }
    public set certificateId(certificateId: string  | undefined) {
        this['certificate_id'] = certificateId;
    }
    public get certificateId(): string | undefined {
        return this['certificate_id'];
    }
    public withCommonName(commonName: string): ShowDeviceCertificateResponse {
        this['common_name'] = commonName;
        return this;
    }
    public set commonName(commonName: string  | undefined) {
        this['common_name'] = commonName;
    }
    public get commonName(): string | undefined {
        return this['common_name'];
    }
    public withExpiryDate(expiryDate: string): ShowDeviceCertificateResponse {
        this['expiry_date'] = expiryDate;
        return this;
    }
    public set expiryDate(expiryDate: string  | undefined) {
        this['expiry_date'] = expiryDate;
    }
    public get expiryDate(): string | undefined {
        return this['expiry_date'];
    }
    public withFingerprint(fingerprint: string): ShowDeviceCertificateResponse {
        this['fingerprint'] = fingerprint;
        return this;
    }
    public withStatus(status: string): ShowDeviceCertificateResponse {
        this['status'] = status;
        return this;
    }
    public withCertificatePem(certificatePem: string): ShowDeviceCertificateResponse {
        this['certificate_pem'] = certificatePem;
        return this;
    }
    public set certificatePem(certificatePem: string  | undefined) {
        this['certificate_pem'] = certificatePem;
    }
    public get certificatePem(): string | undefined {
        return this['certificate_pem'];
    }
}