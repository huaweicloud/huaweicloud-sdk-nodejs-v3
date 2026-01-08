import { PortRange } from './PortRange';


export class ListenerNode {
    public id?: string;
    public name?: string;
    public protocol?: string;
    private 'protocol_port'?: number;
    private 'port_ranges'?: Array<PortRange>;
    public constructor(id?: string, name?: string, protocol?: string, protocolPort?: number) { 
        this['id'] = id;
        this['name'] = name;
        this['protocol'] = protocol;
        this['protocol_port'] = protocolPort;
    }
    public withId(id: string): ListenerNode {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListenerNode {
        this['name'] = name;
        return this;
    }
    public withProtocol(protocol: string): ListenerNode {
        this['protocol'] = protocol;
        return this;
    }
    public withProtocolPort(protocolPort: number): ListenerNode {
        this['protocol_port'] = protocolPort;
        return this;
    }
    public set protocolPort(protocolPort: number  | undefined) {
        this['protocol_port'] = protocolPort;
    }
    public get protocolPort(): number | undefined {
        return this['protocol_port'];
    }
    public withPortRanges(portRanges: Array<PortRange>): ListenerNode {
        this['port_ranges'] = portRanges;
        return this;
    }
    public set portRanges(portRanges: Array<PortRange>  | undefined) {
        this['port_ranges'] = portRanges;
    }
    public get portRanges(): Array<PortRange> | undefined {
        return this['port_ranges'];
    }
}