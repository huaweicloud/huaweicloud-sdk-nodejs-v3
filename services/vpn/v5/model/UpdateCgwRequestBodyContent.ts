import { CaCertificateRequest } from './CaCertificateRequest';


export class UpdateCgwRequestBodyContent {
    public name?: string;
    private 'ca_certificate'?: CaCertificateRequest;
    public constructor() { 
    }
    public withName(name: string): UpdateCgwRequestBodyContent {
        this['name'] = name;
        return this;
    }
    public withCaCertificate(caCertificate: CaCertificateRequest): UpdateCgwRequestBodyContent {
        this['ca_certificate'] = caCertificate;
        return this;
    }
    public set caCertificate(caCertificate: CaCertificateRequest  | undefined) {
        this['ca_certificate'] = caCertificate;
    }
    public get caCertificate(): CaCertificateRequest | undefined {
        return this['ca_certificate'];
    }
}