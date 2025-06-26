

export class DnsConf {
    public hosts?: { [key: string]: string; };
    public constructor() { 
    }
    public withHosts(hosts: { [key: string]: string; }): DnsConf {
        this['hosts'] = hosts;
        return this;
    }
}