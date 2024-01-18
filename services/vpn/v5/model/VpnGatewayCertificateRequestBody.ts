import { VpnGatewayCertificateRequestBodyContent } from './VpnGatewayCertificateRequestBodyContent';


export class VpnGatewayCertificateRequestBody {
    public certificate?: VpnGatewayCertificateRequestBodyContent;
    public constructor(certificate?: VpnGatewayCertificateRequestBodyContent) { 
        this['certificate'] = certificate;
    }
    public withCertificate(certificate: VpnGatewayCertificateRequestBodyContent): VpnGatewayCertificateRequestBody {
        this['certificate'] = certificate;
        return this;
    }
}