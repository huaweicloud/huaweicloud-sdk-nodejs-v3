

export class ConnectionsRoute {
    public name?: string;
    public cidr?: string;
    private 'create_time'?: number;
    public constructor() { 
    }
    public withName(name: string): ConnectionsRoute {
        this['name'] = name;
        return this;
    }
    public withCidr(cidr: string): ConnectionsRoute {
        this['cidr'] = cidr;
        return this;
    }
    public withCreateTime(createTime: number): ConnectionsRoute {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
}