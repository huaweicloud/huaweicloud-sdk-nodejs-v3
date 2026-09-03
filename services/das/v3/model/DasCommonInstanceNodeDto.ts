

export class DasCommonInstanceNodeDto {
    public id?: string;
    public name?: string;
    public status?: string;
    public role?: string;
    private 'private_ip'?: string;
    private 'public_ip'?: string;
    private 'group_id'?: string;
    private 'group_name'?: string;
    public constructor() { 
    }
    public withId(id: string): DasCommonInstanceNodeDto {
        this['id'] = id;
        return this;
    }
    public withName(name: string): DasCommonInstanceNodeDto {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): DasCommonInstanceNodeDto {
        this['status'] = status;
        return this;
    }
    public withRole(role: string): DasCommonInstanceNodeDto {
        this['role'] = role;
        return this;
    }
    public withPrivateIp(privateIp: string): DasCommonInstanceNodeDto {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withPublicIp(publicIp: string): DasCommonInstanceNodeDto {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withGroupId(groupId: string): DasCommonInstanceNodeDto {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withGroupName(groupName: string): DasCommonInstanceNodeDto {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
}