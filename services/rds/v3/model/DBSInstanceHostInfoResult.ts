

export class DBSInstanceHostInfoResult {
    public id?: string;
    public host?: string;
    private 'host_name'?: string;
    public constructor() { 
    }
    public withId(id: string): DBSInstanceHostInfoResult {
        this['id'] = id;
        return this;
    }
    public withHost(host: string): DBSInstanceHostInfoResult {
        this['host'] = host;
        return this;
    }
    public withHostName(hostName: string): DBSInstanceHostInfoResult {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
}