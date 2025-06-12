

export class VpnAccessPolicy {
    public id?: string;
    public name?: string;
    public type?: string;
    private 'user_group_id'?: string;
    private 'user_group_name'?: string;
    public description?: string;
    private 'dest_ip_cidrs'?: Array<string>;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public constructor() { 
    }
    public withId(id: string): VpnAccessPolicy {
        this['id'] = id;
        return this;
    }
    public withName(name: string): VpnAccessPolicy {
        this['name'] = name;
        return this;
    }
    public withType(type: string): VpnAccessPolicy {
        this['type'] = type;
        return this;
    }
    public withUserGroupId(userGroupId: string): VpnAccessPolicy {
        this['user_group_id'] = userGroupId;
        return this;
    }
    public set userGroupId(userGroupId: string  | undefined) {
        this['user_group_id'] = userGroupId;
    }
    public get userGroupId(): string | undefined {
        return this['user_group_id'];
    }
    public withUserGroupName(userGroupName: string): VpnAccessPolicy {
        this['user_group_name'] = userGroupName;
        return this;
    }
    public set userGroupName(userGroupName: string  | undefined) {
        this['user_group_name'] = userGroupName;
    }
    public get userGroupName(): string | undefined {
        return this['user_group_name'];
    }
    public withDescription(description: string): VpnAccessPolicy {
        this['description'] = description;
        return this;
    }
    public withDestIpCidrs(destIpCidrs: Array<string>): VpnAccessPolicy {
        this['dest_ip_cidrs'] = destIpCidrs;
        return this;
    }
    public set destIpCidrs(destIpCidrs: Array<string>  | undefined) {
        this['dest_ip_cidrs'] = destIpCidrs;
    }
    public get destIpCidrs(): Array<string> | undefined {
        return this['dest_ip_cidrs'];
    }
    public withCreatedAt(createdAt: Date): VpnAccessPolicy {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): VpnAccessPolicy {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
}