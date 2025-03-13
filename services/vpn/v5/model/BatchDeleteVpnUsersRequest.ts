import { BatchDeleteVpnUsersRequestBody } from './BatchDeleteVpnUsersRequestBody';


export class BatchDeleteVpnUsersRequest {
    private 'vpn_server_id'?: string;
    public body?: BatchDeleteVpnUsersRequestBody;
    public constructor(vpnServerId?: string) { 
        this['vpn_server_id'] = vpnServerId;
    }
    public withVpnServerId(vpnServerId: string): BatchDeleteVpnUsersRequest {
        this['vpn_server_id'] = vpnServerId;
        return this;
    }
    public set vpnServerId(vpnServerId: string  | undefined) {
        this['vpn_server_id'] = vpnServerId;
    }
    public get vpnServerId(): string | undefined {
        return this['vpn_server_id'];
    }
    public withBody(body: BatchDeleteVpnUsersRequestBody): BatchDeleteVpnUsersRequest {
        this['body'] = body;
        return this;
    }
}