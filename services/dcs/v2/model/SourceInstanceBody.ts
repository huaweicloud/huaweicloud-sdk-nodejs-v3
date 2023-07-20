

export class SourceInstanceBody {
    public addrs?: string;
    public password?: string;
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
}