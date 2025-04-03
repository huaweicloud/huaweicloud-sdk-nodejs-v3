import { ImportClientCaCertificateRequestBodyClientCaCertificate } from './ImportClientCaCertificateRequestBodyClientCaCertificate';


export class ImportClientCaCertificateRequestBody {
    private 'client_ca_certificate'?: ImportClientCaCertificateRequestBodyClientCaCertificate;
    public constructor(clientCaCertificate?: ImportClientCaCertificateRequestBodyClientCaCertificate) { 
        this['client_ca_certificate'] = clientCaCertificate;
    }
    public withClientCaCertificate(clientCaCertificate: ImportClientCaCertificateRequestBodyClientCaCertificate): ImportClientCaCertificateRequestBody {
        this['client_ca_certificate'] = clientCaCertificate;
        return this;
    }
    public set clientCaCertificate(clientCaCertificate: ImportClientCaCertificateRequestBodyClientCaCertificate  | undefined) {
        this['client_ca_certificate'] = clientCaCertificate;
    }
    public get clientCaCertificate(): ImportClientCaCertificateRequestBodyClientCaCertificate | undefined {
        return this['client_ca_certificate'];
    }
}