import { ResPortRange } from './ResPortRange';


export class CloneListenerResp {
    public id?: string;
    private 'loadbalancer_id'?: string;
    private 'protocol_port'?: number;
    private 'port_ranges'?: Array<ResPortRange>;
    public constructor() { 
    }
    public withId(id: string): CloneListenerResp {
        this['id'] = id;
        return this;
    }
    public withLoadbalancerId(loadbalancerId: string): CloneListenerResp {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: string  | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId(): string | undefined {
        return this['loadbalancer_id'];
    }
    public withProtocolPort(protocolPort: number): CloneListenerResp {
        this['protocol_port'] = protocolPort;
        return this;
    }
    public set protocolPort(protocolPort: number  | undefined) {
        this['protocol_port'] = protocolPort;
    }
    public get protocolPort(): number | undefined {
        return this['protocol_port'];
    }
    public withPortRanges(portRanges: Array<ResPortRange>): CloneListenerResp {
        this['port_ranges'] = portRanges;
        return this;
    }
    public set portRanges(portRanges: Array<ResPortRange>  | undefined) {
        this['port_ranges'] = portRanges;
    }
    public get portRanges(): Array<ResPortRange> | undefined {
        return this['port_ranges'];
    }
}