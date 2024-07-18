import { UpdateVpnUserGroupRequestBody } from './UpdateVpnUserGroupRequestBody';


export class UpdateVpnUserGroupRequest {
    private 'vpn_server_id'?: string;
    private 'group_id'?: string;
    public body?: UpdateVpnUserGroupRequestBody;
    public constructor(vpnServerId?: string, groupId?: string) { 
        this['vpn_server_id'] = vpnServerId;
        this['group_id'] = groupId;
    }
    public withVpnServerId(vpnServerId: string): UpdateVpnUserGroupRequest {
        this['vpn_server_id'] = vpnServerId;
        return this;
    }
    public set vpnServerId(vpnServerId: string  | undefined) {
        this['vpn_server_id'] = vpnServerId;
    }
    public get vpnServerId(): string | undefined {
        return this['vpn_server_id'];
    }
    public withGroupId(groupId: string): UpdateVpnUserGroupRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withBody(body: UpdateVpnUserGroupRequestBody): UpdateVpnUserGroupRequest {
        this['body'] = body;
        return this;
    }
}