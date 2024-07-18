import { AddVpnUserToGroupRequestBody } from './AddVpnUserToGroupRequestBody';


export class AddVpnUsersToGroupRequest {
    private 'vpn_server_id'?: string;
    private 'group_id'?: string;
    public body?: AddVpnUserToGroupRequestBody;
    public constructor(vpnServerId?: string, groupId?: string) { 
        this['vpn_server_id'] = vpnServerId;
        this['group_id'] = groupId;
    }
    public withVpnServerId(vpnServerId: string): AddVpnUsersToGroupRequest {
        this['vpn_server_id'] = vpnServerId;
        return this;
    }
    public set vpnServerId(vpnServerId: string  | undefined) {
        this['vpn_server_id'] = vpnServerId;
    }
    public get vpnServerId(): string | undefined {
        return this['vpn_server_id'];
    }
    public withGroupId(groupId: string): AddVpnUsersToGroupRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withBody(body: AddVpnUserToGroupRequestBody): AddVpnUsersToGroupRequest {
        this['body'] = body;
        return this;
    }
}