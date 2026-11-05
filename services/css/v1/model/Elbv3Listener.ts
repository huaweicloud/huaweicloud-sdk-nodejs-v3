import { ListenerIpGroup } from './ListenerIpGroup';


export class Elbv3Listener {
    public id?: string;
    public name?: string;
    public protocol?: string;
    private 'protocol_port'?: number;
    private 'default_tls_container_ref'?: string;
    private 'client_ca_tls_container_ref'?: string;
    public ipgroup?: ListenerIpGroup;
    public constructor() { 
    }
    public withId(id: string): Elbv3Listener {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Elbv3Listener {
        this['name'] = name;
        return this;
    }
    public withProtocol(protocol: string): Elbv3Listener {
        this['protocol'] = protocol;
        return this;
    }
    public withProtocolPort(protocolPort: number): Elbv3Listener {
        this['protocol_port'] = protocolPort;
        return this;
    }
    public set protocolPort(protocolPort: number  | undefined) {
        this['protocol_port'] = protocolPort;
    }
    public get protocolPort(): number | undefined {
        return this['protocol_port'];
    }
    public withDefaultTlsContainerRef(defaultTlsContainerRef: string): Elbv3Listener {
        this['default_tls_container_ref'] = defaultTlsContainerRef;
        return this;
    }
    public set defaultTlsContainerRef(defaultTlsContainerRef: string  | undefined) {
        this['default_tls_container_ref'] = defaultTlsContainerRef;
    }
    public get defaultTlsContainerRef(): string | undefined {
        return this['default_tls_container_ref'];
    }
    public withClientCaTlsContainerRef(clientCaTlsContainerRef: string): Elbv3Listener {
        this['client_ca_tls_container_ref'] = clientCaTlsContainerRef;
        return this;
    }
    public set clientCaTlsContainerRef(clientCaTlsContainerRef: string  | undefined) {
        this['client_ca_tls_container_ref'] = clientCaTlsContainerRef;
    }
    public get clientCaTlsContainerRef(): string | undefined {
        return this['client_ca_tls_container_ref'];
    }
    public withIpgroup(ipgroup: ListenerIpGroup): Elbv3Listener {
        this['ipgroup'] = ipgroup;
        return this;
    }
}