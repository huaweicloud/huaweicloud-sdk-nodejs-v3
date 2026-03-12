
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExportCertificateResponse extends SdkResponse {
    private 'private_key'?: string;
    public certificate?: string;
    private 'certificate_chain'?: string;
    private 'enc_certificate'?: string;
    private 'enc_private_key'?: string;
    private 'enc_sm2_enveloped_key'?: string;
    private 'signed_and_enveloped_data'?: string;
    public constructor() { 
        super();
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
    public withEncSm2EnvelopedKey(encSm2EnvelopedKey: string): ExportCertificateResponse {
        this['enc_sm2_enveloped_key'] = encSm2EnvelopedKey;
        return this;
    }
    public set encSm2EnvelopedKey(encSm2EnvelopedKey: string  | undefined) {
        this['enc_sm2_enveloped_key'] = encSm2EnvelopedKey;
    }
    public get encSm2EnvelopedKey(): string | undefined {
        return this['enc_sm2_enveloped_key'];
    }
    public withSignedAndEnvelopedData(signedAndEnvelopedData: string): ExportCertificateResponse {
        this['signed_and_enveloped_data'] = signedAndEnvelopedData;
        return this;
    }
    public set signedAndEnvelopedData(signedAndEnvelopedData: string  | undefined) {
        this['signed_and_enveloped_data'] = signedAndEnvelopedData;
    }
    public get signedAndEnvelopedData(): string | undefined {
        return this['signed_and_enveloped_data'];
    }
}