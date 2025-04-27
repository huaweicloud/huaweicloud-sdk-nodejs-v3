

export class IpaddressesData {
    public status?: string;
    public id?: string;
    public ip?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'subnet_id'?: string;
    private 'error_info'?: string;
    public constructor() { 
    }
    public withStatus(status: string): IpaddressesData {
        this['status'] = status;
        return this;
    }
    public withId(id: string): IpaddressesData {
        this['id'] = id;
        return this;
    }
    public withIp(ip: string): IpaddressesData {
        this['ip'] = ip;
        return this;
    }
    public withCreateTime(createTime: string): IpaddressesData {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): IpaddressesData {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withSubnetId(subnetId: string): IpaddressesData {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withErrorInfo(errorInfo: string): IpaddressesData {
        this['error_info'] = errorInfo;
        return this;
    }
    public set errorInfo(errorInfo: string  | undefined) {
        this['error_info'] = errorInfo;
    }
    public get errorInfo(): string | undefined {
        return this['error_info'];
    }
}