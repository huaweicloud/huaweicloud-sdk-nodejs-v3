

export class IdHostnameEntry {
    public id?: string;
    public hostname?: string;
    public constructor(id?: string, hostname?: string) { 
        this['id'] = id;
        this['hostname'] = hostname;
    }
    public withId(id: string): IdHostnameEntry {
        this['id'] = id;
        return this;
    }
    public withHostname(hostname: string): IdHostnameEntry {
        this['hostname'] = hostname;
        return this;
    }
}