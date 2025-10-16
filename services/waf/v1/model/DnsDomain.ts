import { Server } from './Server';


export class DnsDomain {
    public id?: string;
    public domain?: string;
    public servers?: Array<Server>;
    private 'protect_port'?: string;
    public constructor() { 
    }
    public withId(id: string): DnsDomain {
        this['id'] = id;
        return this;
    }
    public withDomain(domain: string): DnsDomain {
        this['domain'] = domain;
        return this;
    }
    public withServers(servers: Array<Server>): DnsDomain {
        this['servers'] = servers;
        return this;
    }
    public withProtectPort(protectPort: string): DnsDomain {
        this['protect_port'] = protectPort;
        return this;
    }
    public set protectPort(protectPort: string  | undefined) {
        this['protect_port'] = protectPort;
    }
    public get protectPort(): string | undefined {
        return this['protect_port'];
    }
}