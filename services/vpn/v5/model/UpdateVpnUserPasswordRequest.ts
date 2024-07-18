import { UpdateVpnUserPasswordRequestBody } from './UpdateVpnUserPasswordRequestBody';


export class UpdateVpnUserPasswordRequest {
    private 'vpn_server_id'?: string;
    private 'user_id'?: string;
    public body?: UpdateVpnUserPasswordRequestBody;
    public constructor(vpnServerId?: string, userId?: string) { 
        this['vpn_server_id'] = vpnServerId;
        this['user_id'] = userId;
    }
    public withVpnServerId(vpnServerId: string): UpdateVpnUserPasswordRequest {
        this['vpn_server_id'] = vpnServerId;
        return this;
    }
    public set vpnServerId(vpnServerId: string  | undefined) {
        this['vpn_server_id'] = vpnServerId;
    }
    public get vpnServerId(): string | undefined {
        return this['vpn_server_id'];
    }
    public withUserId(userId: string): UpdateVpnUserPasswordRequest {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withBody(body: UpdateVpnUserPasswordRequestBody): UpdateVpnUserPasswordRequest {
        this['body'] = body;
        return this;
    }
}