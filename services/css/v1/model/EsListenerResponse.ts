import { EsIpgroupResource } from './EsIpgroupResource';


export class EsListenerResponse {
    public protocol?: string;
    public id?: string;
    public name?: string;
    private 'protocol_port'?: string;
    public ipgroup?: EsIpgroupResource;
    public constructor() { 
    }
    public withProtocol(protocol: string): EsListenerResponse {
        this['protocol'] = protocol;
        return this;
    }
    public withId(id: string): EsListenerResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): EsListenerResponse {
        this['name'] = name;
        return this;
    }
    public withProtocolPort(protocolPort: string): EsListenerResponse {
        this['protocol_port'] = protocolPort;
        return this;
    }
    public set protocolPort(protocolPort: string  | undefined) {
        this['protocol_port'] = protocolPort;
    }
    public get protocolPort(): string | undefined {
        return this['protocol_port'];
    }
    public withIpgroup(ipgroup: EsIpgroupResource): EsListenerResponse {
        this['ipgroup'] = ipgroup;
        return this;
    }
}