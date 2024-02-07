import { CreateVpnGatewayCertificateRequestBodyContent } from './CreateVpnGatewayCertificateRequestBodyContent';


export class CreateVpnGatewayCertificateRequestBody {
    public certificate?: CreateVpnGatewayCertificateRequestBodyContent;
    public constructor(certificate?: CreateVpnGatewayCertificateRequestBodyContent) { 
        this['certificate'] = certificate;
    }
    public withCertificate(certificate: CreateVpnGatewayCertificateRequestBodyContent): CreateVpnGatewayCertificateRequestBody {
        this['certificate'] = certificate;
        return this;
    }
}