import { UpgradeRequestBody } from './UpgradeRequestBody';


export class UpgradeVpnGatewayRequest {
    private 'vgw_id'?: string;
    public body?: UpgradeRequestBody;
    public constructor(vgwId?: string) { 
        this['vgw_id'] = vgwId;
    }
    public withVgwId(vgwId: string): UpgradeVpnGatewayRequest {
        this['vgw_id'] = vgwId;
        return this;
    }
    public set vgwId(vgwId: string  | undefined) {
        this['vgw_id'] = vgwId;
    }
    public get vgwId(): string | undefined {
        return this['vgw_id'];
    }
    public withBody(body: UpgradeRequestBody): UpgradeVpnGatewayRequest {
        this['body'] = body;
        return this;
    }
}