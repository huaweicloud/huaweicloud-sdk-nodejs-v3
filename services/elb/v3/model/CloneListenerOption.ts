import { PortRange } from './PortRange';
import { SubnetMappingList } from './SubnetMappingList';


export class CloneListenerOption {
    public name?: string;
    private 'loadbalancer_id'?: string;
    private 'protocol_port'?: number;
    private 'port_ranges'?: Array<PortRange>;
    private 'reuse_pool'?: boolean;
    private 'subnet_mapping_list'?: Array<SubnetMappingList>;
    public constructor(loadbalancerId?: string) { 
        this['loadbalancer_id'] = loadbalancerId;
    }
    public withName(name: string): CloneListenerOption {
        this['name'] = name;
        return this;
    }
    public withLoadbalancerId(loadbalancerId: string): CloneListenerOption {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: string  | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId(): string | undefined {
        return this['loadbalancer_id'];
    }
    public withProtocolPort(protocolPort: number): CloneListenerOption {
        this['protocol_port'] = protocolPort;
        return this;
    }
    public set protocolPort(protocolPort: number  | undefined) {
        this['protocol_port'] = protocolPort;
    }
    public get protocolPort(): number | undefined {
        return this['protocol_port'];
    }
    public withPortRanges(portRanges: Array<PortRange>): CloneListenerOption {
        this['port_ranges'] = portRanges;
        return this;
    }
    public set portRanges(portRanges: Array<PortRange>  | undefined) {
        this['port_ranges'] = portRanges;
    }
    public get portRanges(): Array<PortRange> | undefined {
        return this['port_ranges'];
    }
    public withReusePool(reusePool: boolean): CloneListenerOption {
        this['reuse_pool'] = reusePool;
        return this;
    }
    public set reusePool(reusePool: boolean  | undefined) {
        this['reuse_pool'] = reusePool;
    }
    public get reusePool(): boolean | undefined {
        return this['reuse_pool'];
    }
    public withSubnetMappingList(subnetMappingList: Array<SubnetMappingList>): CloneListenerOption {
        this['subnet_mapping_list'] = subnetMappingList;
        return this;
    }
    public set subnetMappingList(subnetMappingList: Array<SubnetMappingList>  | undefined) {
        this['subnet_mapping_list'] = subnetMappingList;
    }
    public get subnetMappingList(): Array<SubnetMappingList> | undefined {
        return this['subnet_mapping_list'];
    }
}