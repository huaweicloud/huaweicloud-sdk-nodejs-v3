import { UpdateVpnLogConfigRequestBody } from './UpdateVpnLogConfigRequestBody';


export class UpdateVpnConnectionsLogConfigRequest {
    private 'p2c_vgw_id'?: string;
    public body?: UpdateVpnLogConfigRequestBody;
    public constructor(p2cVgwId?: string) { 
        this['p2c_vgw_id'] = p2cVgwId;
    }
    public withP2cVgwId(p2cVgwId: string): UpdateVpnConnectionsLogConfigRequest {
        this['p2c_vgw_id'] = p2cVgwId;
        return this;
    }
    public set p2cVgwId(p2cVgwId: string  | undefined) {
        this['p2c_vgw_id'] = p2cVgwId;
    }
    public get p2cVgwId(): string | undefined {
        return this['p2c_vgw_id'];
    }
    public withBody(body: UpdateVpnLogConfigRequestBody): UpdateVpnConnectionsLogConfigRequest {
        this['body'] = body;
        return this;
    }
}