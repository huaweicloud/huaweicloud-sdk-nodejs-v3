

export class SourceInstanceBody {
    public addrs?: string;
    public password?: string;
    private 'task_status'?: string;
    public id?: string;
    public ip?: string;
    public port?: string;
    public name?: string;
    private 'proxy_multi_db'?: boolean;
    public db?: string;
    public constructor(addrs?: string) { 
        this['addrs'] = addrs;
    }
    public withAddrs(addrs: string): SourceInstanceBody {
        this['addrs'] = addrs;
        return this;
    }
    public withPassword(password: string): SourceInstanceBody {
        this['password'] = password;
        return this;
    }
    public withTaskStatus(taskStatus: string): SourceInstanceBody {
        this['task_status'] = taskStatus;
        return this;
    }
    public set taskStatus(taskStatus: string  | undefined) {
        this['task_status'] = taskStatus;
    }
    public get taskStatus(): string | undefined {
        return this['task_status'];
    }
    public withId(id: string): SourceInstanceBody {
        this['id'] = id;
        return this;
    }
    public withIp(ip: string): SourceInstanceBody {
        this['ip'] = ip;
        return this;
    }
    public withPort(port: string): SourceInstanceBody {
        this['port'] = port;
        return this;
    }
    public withName(name: string): SourceInstanceBody {
        this['name'] = name;
        return this;
    }
    public withProxyMultiDb(proxyMultiDb: boolean): SourceInstanceBody {
        this['proxy_multi_db'] = proxyMultiDb;
        return this;
    }
    public set proxyMultiDb(proxyMultiDb: boolean  | undefined) {
        this['proxy_multi_db'] = proxyMultiDb;
    }
    public get proxyMultiDb(): boolean | undefined {
        return this['proxy_multi_db'];
    }
    public withDb(db: string): SourceInstanceBody {
        this['db'] = db;
        return this;
    }
}