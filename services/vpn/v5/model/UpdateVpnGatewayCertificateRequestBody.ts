import { UpdateVpnGatewayCertificateRequestBodyContent } from './UpdateVpnGatewayCertificateRequestBodyContent';


export class UpdateVpnGatewayCertificateRequestBody {
    public certificate?: UpdateVpnGatewayCertificateRequestBodyContent;
    public constructor(certificate?: UpdateVpnGatewayCertificateRequestBodyContent) { 
        this['certificate'] = certificate;
    }
    public withCertificate(certificate: UpdateVpnGatewayCertificateRequestBodyContent): UpdateVpnGatewayCertificateRequestBody {
        this['certificate'] = certificate;
        return this;
    }
}