import { EsHealthIpgroupResource } from './EsHealthIpgroupResource';


export class EsHealthmonitorsResource {
    public id?: string;
    public name?: string;
    private 'protocol_port'?: string;
    public ipgroup?: EsHealthIpgroupResource;
    public constructor() { 
    }
    public withId(id: string): EsHealthmonitorsResource {
        this['id'] = id;
        return this;
    }
    public withName(name: string): EsHealthmonitorsResource {
        this['name'] = name;
        return this;
    }
    public withProtocolPort(protocolPort: string): EsHealthmonitorsResource {
        this['protocol_port'] = protocolPort;
        return this;
    }
    public set protocolPort(protocolPort: string  | undefined) {
        this['protocol_port'] = protocolPort;
    }
    public get protocolPort(): string | undefined {
        return this['protocol_port'];
    }
    public withIpgroup(ipgroup: EsHealthIpgroupResource): EsHealthmonitorsResource {
        this['ipgroup'] = ipgroup;
        return this;
    }
}