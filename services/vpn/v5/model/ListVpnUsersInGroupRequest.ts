

export class ListVpnUsersInGroupRequest {
    private 'vpn_server_id'?: string;
    private 'group_id'?: string;
    public limit?: number;
    public marker?: string;
    public constructor(vpnServerId?: string, groupId?: string) { 
        this['vpn_server_id'] = vpnServerId;
        this['group_id'] = groupId;
    }
    public withVpnServerId(vpnServerId: string): ListVpnUsersInGroupRequest {
        this['vpn_server_id'] = vpnServerId;
        return this;
    }
    public set vpnServerId(vpnServerId: string  | undefined) {
        this['vpn_server_id'] = vpnServerId;
    }
    public get vpnServerId(): string | undefined {
        return this['vpn_server_id'];
    }
    public withGroupId(groupId: string): ListVpnUsersInGroupRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withLimit(limit: number): ListVpnUsersInGroupRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListVpnUsersInGroupRequest {
        this['marker'] = marker;
        return this;
    }
}