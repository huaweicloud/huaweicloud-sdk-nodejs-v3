

export class TargetInstanceBody {
    public id?: string;
    public name?: string;
    public password?: string;
    public ip?: string;
    public port?: string;
    public addrs?: string;
    private 'proxy_multi_db'?: boolean;
    public db?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): TargetInstanceBody {
        this['id'] = id;
        return this;
    }
    public withName(name: string): TargetInstanceBody {
        this['name'] = name;
        return this;
    }
    public withPassword(password: string): TargetInstanceBody {
        this['password'] = password;
        return this;
    }
    public withIp(ip: string): TargetInstanceBody {
        this['ip'] = ip;
        return this;
    }
    public withPort(port: string): TargetInstanceBody {
        this['port'] = port;
        return this;
    }
    public withAddrs(addrs: string): TargetInstanceBody {
        this['addrs'] = addrs;
        return this;
    }
    public withProxyMultiDb(proxyMultiDb: boolean): TargetInstanceBody {
        this['proxy_multi_db'] = proxyMultiDb;
        return this;
    }
    public set proxyMultiDb(proxyMultiDb: boolean  | undefined) {
        this['proxy_multi_db'] = proxyMultiDb;
    }
    public get proxyMultiDb(): boolean | undefined {
        return this['proxy_multi_db'];
    }
    public withDb(db: string): TargetInstanceBody {
        this['db'] = db;
        return this;
    }
}