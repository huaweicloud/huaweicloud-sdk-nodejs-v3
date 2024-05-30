

export class InstanceNodeDTO {
    public id?: string;
    public name?: string;
    private 'private_ip'?: string;
    public status?: string;
    private 'create_user'?: string;
    private 'create_time'?: string;
    private 'gateway_version'?: string;
    public constructor() { 
    }
    public withId(id: string): InstanceNodeDTO {
        this['id'] = id;
        return this;
    }
    public withName(name: string): InstanceNodeDTO {
        this['name'] = name;
        return this;
    }
    public withPrivateIp(privateIp: string): InstanceNodeDTO {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withStatus(status: string): InstanceNodeDTO {
        this['status'] = status;
        return this;
    }
    public withCreateUser(createUser: string): InstanceNodeDTO {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withCreateTime(createTime: string): InstanceNodeDTO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withGatewayVersion(gatewayVersion: string): InstanceNodeDTO {
        this['gateway_version'] = gatewayVersion;
        return this;
    }
    public set gatewayVersion(gatewayVersion: string  | undefined) {
        this['gateway_version'] = gatewayVersion;
    }
    public get gatewayVersion(): string | undefined {
        return this['gateway_version'];
    }
}