import { ListenerIpGroup } from './ListenerIpGroup';


export class Elbv3Listener {
    public id?: string;
    public name?: string;
    public protocol?: string;
    private 'protocol_port'?: number;
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
    public withIpgroup(ipgroup: ListenerIpGroup): Elbv3Listener {
        this['ipgroup'] = ipgroup;
        return this;
    }
}