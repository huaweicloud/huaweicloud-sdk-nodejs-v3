

export class ShowVpnUserGroupRequest {
    private 'vpn_server_id'?: string;
    private 'group_id'?: string;
    public constructor(vpnServerId?: string, groupId?: string) { 
        this['vpn_server_id'] = vpnServerId;
        this['group_id'] = groupId;
    }
    public withVpnServerId(vpnServerId: string): ShowVpnUserGroupRequest {
        this['vpn_server_id'] = vpnServerId;
        return this;
    }
    public set vpnServerId(vpnServerId: string  | undefined) {
        this['vpn_server_id'] = vpnServerId;
    }
    public get vpnServerId(): string | undefined {
        return this['vpn_server_id'];
    }
    public withGroupId(groupId: string): ShowVpnUserGroupRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
}