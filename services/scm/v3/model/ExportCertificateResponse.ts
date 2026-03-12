
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExportCertificateResponse extends SdkResponse {
    private 'entire_certificate'?: string;
    public certificate?: string;
    private 'certificate_chain'?: string;
    private 'private_key'?: string;
    private 'enc_certificate'?: string;
    private 'enc_private_key'?: string;
    public constructor() { 
        super();
    }
    public withEntireCertificate(entireCertificate: string): ExportCertificateResponse {
        this['entire_certificate'] = entireCertificate;
        return this;
    }
    public set entireCertificate(entireCertificate: string  | undefined) {
        this['entire_certificate'] = entireCertificate;
    }
    public get entireCertificate(): string | undefined {
        return this['entire_certificate'];
    }
    public withCertificate(certificate: string): ExportCertificateResponse {
        this['certificate'] = certificate;
        return this;
    }
    public withCertificateChain(certificateChain: string): ExportCertificateResponse {
        this['certificate_chain'] = certificateChain;
        return this;
    }
    public set certificateChain(certificateChain: string  | undefined) {
        this['certificate_chain'] = certificateChain;
    }
    public get certificateChain(): string | undefined {
        return this['certificate_chain'];
    }
    public withPrivateKey(privateKey: string): ExportCertificateResponse {
        this['private_key'] = privateKey;
        return this;
    }
    public set privateKey(privateKey: string  | undefined) {
        this['private_key'] = privateKey;
    }
    public get privateKey(): string | undefined {
        return this['private_key'];
    }
    public withEncCertificate(encCertificate: string): ExportCertificateResponse {
        this['enc_certificate'] = encCertificate;
        return this;
    }
    public set encCertificate(encCertificate: string  | undefined) {
        this['enc_certificate'] = encCertificate;
    }
    public get encCertificate(): string | undefined {
        return this['enc_certificate'];
    }
    public withEncPrivateKey(encPrivateKey: string): ExportCertificateResponse {
        this['enc_private_key'] = encPrivateKey;
        return this;
    }
    public set encPrivateKey(encPrivateKey: string  | undefined) {
        this['enc_private_key'] = encPrivateKey;
    }
    public get encPrivateKey(): string | undefined {
        return this['enc_private_key'];
    }
}