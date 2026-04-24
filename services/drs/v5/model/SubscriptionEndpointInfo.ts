

export class SubscriptionEndpointInfo {
    private 'db_instance_id'?: string;
    public name?: string;
    public ip?: string;
    public port?: number;
    public type?: string;
    private 'user_name'?: string;
    public constructor(dbInstanceId?: string, name?: string, ip?: string, port?: number, type?: string, userName?: string) { 
        this['db_instance_id'] = dbInstanceId;
        this['name'] = name;
        this['ip'] = ip;
        this['port'] = port;
        this['type'] = type;
        this['user_name'] = userName;
    }
    public withDbInstanceId(dbInstanceId: string): SubscriptionEndpointInfo {
        this['db_instance_id'] = dbInstanceId;
        return this;
    }
    public set dbInstanceId(dbInstanceId: string  | undefined) {
        this['db_instance_id'] = dbInstanceId;
    }
    public get dbInstanceId(): string | undefined {
        return this['db_instance_id'];
    }
    public withName(name: string): SubscriptionEndpointInfo {
        this['name'] = name;
        return this;
    }
    public withIp(ip: string): SubscriptionEndpointInfo {
        this['ip'] = ip;
        return this;
    }
    public withPort(port: number): SubscriptionEndpointInfo {
        this['port'] = port;
        return this;
    }
    public withType(type: string): SubscriptionEndpointInfo {
        this['type'] = type;
        return this;
    }
    public withUserName(userName: string): SubscriptionEndpointInfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
}