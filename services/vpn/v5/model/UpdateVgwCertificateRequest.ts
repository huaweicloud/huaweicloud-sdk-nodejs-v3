import { UpdateVpnGatewayCertificateRequestBody } from './UpdateVpnGatewayCertificateRequestBody';


export class UpdateVgwCertificateRequest {
    private 'vgw_id'?: string;
    private 'certificate_id'?: string;
    public body?: UpdateVpnGatewayCertificateRequestBody;
    public constructor(vgwId?: string, certificateId?: string) { 
        this['vgw_id'] = vgwId;
        this['certificate_id'] = certificateId;
    }
    public withVgwId(vgwId: string): UpdateVgwCertificateRequest {
        this['vgw_id'] = vgwId;
        return this;
    }
    public set vgwId(vgwId: string  | undefined) {
        this['vgw_id'] = vgwId;
    }
    public get vgwId(): string | undefined {
        return this['vgw_id'];
    }
    public withCertificateId(certificateId: string): UpdateVgwCertificateRequest {
        this['certificate_id'] = certificateId;
        return this;
    }
    public set certificateId(certificateId: string  | undefined) {
        this['certificate_id'] = certificateId;
    }
    public get certificateId(): string | undefined {
        return this['certificate_id'];
    }
    public withBody(body: UpdateVpnGatewayCertificateRequestBody): UpdateVgwCertificateRequest {
        this['body'] = body;
        return this;
    }
}