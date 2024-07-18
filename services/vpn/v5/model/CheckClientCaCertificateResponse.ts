
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckClientCaCertificateResponse extends SdkResponse {
    public name?: string;
    public issuer?: string;
    public subject?: string;
    private 'serial_number'?: string;
    private 'expiration_time'?: Date;
    private 'signature_algorithm'?: string;
    public constructor() { 
        super();
    }
    public withName(name: string): CheckClientCaCertificateResponse {
        this['name'] = name;
        return this;
    }
    public withIssuer(issuer: string): CheckClientCaCertificateResponse {
        this['issuer'] = issuer;
        return this;
    }
    public withSubject(subject: string): CheckClientCaCertificateResponse {
        this['subject'] = subject;
        return this;
    }
    public withSerialNumber(serialNumber: string): CheckClientCaCertificateResponse {
        this['serial_number'] = serialNumber;
        return this;
    }
    public set serialNumber(serialNumber: string  | undefined) {
        this['serial_number'] = serialNumber;
    }
    public get serialNumber(): string | undefined {
        return this['serial_number'];
    }
    public withExpirationTime(expirationTime: Date): CheckClientCaCertificateResponse {
        this['expiration_time'] = expirationTime;
        return this;
    }
    public set expirationTime(expirationTime: Date  | undefined) {
        this['expiration_time'] = expirationTime;
    }
    public get expirationTime(): Date | undefined {
        return this['expiration_time'];
    }
    public withSignatureAlgorithm(signatureAlgorithm: string): CheckClientCaCertificateResponse {
        this['signature_algorithm'] = signatureAlgorithm;
        return this;
    }
    public set signatureAlgorithm(signatureAlgorithm: string  | undefined) {
        this['signature_algorithm'] = signatureAlgorithm;
    }
    public get signatureAlgorithm(): string | undefined {
        return this['signature_algorithm'];
    }
}