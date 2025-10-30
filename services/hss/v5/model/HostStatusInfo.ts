

export class HostStatusInfo {
    private 'host_id'?: string;
    private 'host_name'?: string;
    private 'public_ip'?: Array<string>;
    private 'private_ip'?: Array<string>;
    public status?: string;
    private 'vpc_id'?: string;
    public constructor() { 
    }
    public withHostId(hostId: string): HostStatusInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostName(hostName: string): HostStatusInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withPublicIp(publicIp: Array<string>): HostStatusInfo {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: Array<string>  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): Array<string> | undefined {
        return this['public_ip'];
    }
    public withPrivateIp(privateIp: Array<string>): HostStatusInfo {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: Array<string>  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): Array<string> | undefined {
        return this['private_ip'];
    }
    public withStatus(status: string): HostStatusInfo {
        this['status'] = status;
        return this;
    }
    public withVpcId(vpcId: string): HostStatusInfo {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
}