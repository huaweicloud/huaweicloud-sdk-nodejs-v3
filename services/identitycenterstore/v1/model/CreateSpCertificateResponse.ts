
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateSpCertificateResponse extends SdkResponse {
    private 'certificate_id'?: string;
    public x509certificate?: string;
    public algorithm?: string;
    private 'expiry_date'?: number;
    public state?: CreateSpCertificateResponseStateEnum | string;
    public constructor() { 
        super();
    }
    public withCertificateId(certificateId: string): CreateSpCertificateResponse {
        this['certificate_id'] = certificateId;
        return this;
    }
    public set certificateId(certificateId: string  | undefined) {
        this['certificate_id'] = certificateId;
    }
    public get certificateId(): string | undefined {
        return this['certificate_id'];
    }
    public withX509certificate(x509certificate: string): CreateSpCertificateResponse {
        this['x509certificate'] = x509certificate;
        return this;
    }
    public withAlgorithm(algorithm: string): CreateSpCertificateResponse {
        this['algorithm'] = algorithm;
        return this;
    }
    public withExpiryDate(expiryDate: number): CreateSpCertificateResponse {
        this['expiry_date'] = expiryDate;
        return this;
    }
    public set expiryDate(expiryDate: number  | undefined) {
        this['expiry_date'] = expiryDate;
    }
    public get expiryDate(): number | undefined {
        return this['expiry_date'];
    }
    public withState(state: CreateSpCertificateResponseStateEnum | string): CreateSpCertificateResponse {
        this['state'] = state;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateSpCertificateResponseStateEnum {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
    EXPIRED = 'EXPIRED'
}
