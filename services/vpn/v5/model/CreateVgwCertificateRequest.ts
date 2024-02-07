import { CreateVpnGatewayCertificateRequestBody } from './CreateVpnGatewayCertificateRequestBody';


export class CreateVgwCertificateRequest {
    private 'vgw_id'?: string;
    public body?: CreateVpnGatewayCertificateRequestBody;
    public constructor(vgwId?: string) { 
        this['vgw_id'] = vgwId;
    }
    public withVgwId(vgwId: string): CreateVgwCertificateRequest {
        this['vgw_id'] = vgwId;
        return this;
    }
    public set vgwId(vgwId: string  | undefined) {
        this['vgw_id'] = vgwId;
    }
    public get vgwId(): string | undefined {
        return this['vgw_id'];
    }
    public withBody(body: CreateVpnGatewayCertificateRequestBody): CreateVgwCertificateRequest {
        this['body'] = body;
        return this;
    }
}