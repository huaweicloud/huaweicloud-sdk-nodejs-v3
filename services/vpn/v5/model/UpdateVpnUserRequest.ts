import { UpdateVpnUserRequestBody } from './UpdateVpnUserRequestBody';


export class UpdateVpnUserRequest {
    private 'vpn_server_id'?: string;
    private 'user_id'?: string;
    public body?: UpdateVpnUserRequestBody;
    public constructor(vpnServerId?: string, userId?: string) { 
        this['vpn_server_id'] = vpnServerId;
        this['user_id'] = userId;
    }
    public withVpnServerId(vpnServerId: string): UpdateVpnUserRequest {
        this['vpn_server_id'] = vpnServerId;
        return this;
    }
    public set vpnServerId(vpnServerId: string  | undefined) {
        this['vpn_server_id'] = vpnServerId;
    }
    public get vpnServerId(): string | undefined {
        return this['vpn_server_id'];
    }
    public withUserId(userId: string): UpdateVpnUserRequest {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withBody(body: UpdateVpnUserRequestBody): UpdateVpnUserRequest {
        this['body'] = body;
        return this;
    }
}