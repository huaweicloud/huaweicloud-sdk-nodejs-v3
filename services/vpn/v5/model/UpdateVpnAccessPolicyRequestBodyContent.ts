

export class UpdateVpnAccessPolicyRequestBodyContent {
    public name?: string;
    private 'user_group_id'?: string;
    public description?: string;
    private 'dest_ip_cidrs'?: Array<string>;
    public constructor() { 
    }
    public withName(name: string): UpdateVpnAccessPolicyRequestBodyContent {
        this['name'] = name;
        return this;
    }
    public withUserGroupId(userGroupId: string): UpdateVpnAccessPolicyRequestBodyContent {
        this['user_group_id'] = userGroupId;
        return this;
    }
    public set userGroupId(userGroupId: string  | undefined) {
        this['user_group_id'] = userGroupId;
    }
    public get userGroupId(): string | undefined {
        return this['user_group_id'];
    }
    public withDescription(description: string): UpdateVpnAccessPolicyRequestBodyContent {
        this['description'] = description;
        return this;
    }
    public withDestIpCidrs(destIpCidrs: Array<string>): UpdateVpnAccessPolicyRequestBodyContent {
        this['dest_ip_cidrs'] = destIpCidrs;
        return this;
    }
    public set destIpCidrs(destIpCidrs: Array<string>  | undefined) {
        this['dest_ip_cidrs'] = destIpCidrs;
    }
    public get destIpCidrs(): Array<string> | undefined {
        return this['dest_ip_cidrs'];
    }
}