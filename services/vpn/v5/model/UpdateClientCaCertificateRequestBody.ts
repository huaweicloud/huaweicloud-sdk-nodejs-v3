import { UpdateClientCaCertificateRequestBodyClientCaCertificate } from './UpdateClientCaCertificateRequestBodyClientCaCertificate';


export class UpdateClientCaCertificateRequestBody {
    private 'client_ca_certificate'?: UpdateClientCaCertificateRequestBodyClientCaCertificate;
    public constructor() { 
    }
    public withClientCaCertificate(clientCaCertificate: UpdateClientCaCertificateRequestBodyClientCaCertificate): UpdateClientCaCertificateRequestBody {
        this['client_ca_certificate'] = clientCaCertificate;
        return this;
    }
    public set clientCaCertificate(clientCaCertificate: UpdateClientCaCertificateRequestBodyClientCaCertificate  | undefined) {
        this['client_ca_certificate'] = clientCaCertificate;
    }
    public get clientCaCertificate(): UpdateClientCaCertificateRequestBodyClientCaCertificate | undefined {
        return this['client_ca_certificate'];
    }
}