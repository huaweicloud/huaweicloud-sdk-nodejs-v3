import { ListHostsRspHostPropertiesAvailableInstanceCapacities } from './ListHostsRspHostPropertiesAvailableInstanceCapacities';


export class ListHostsRspHostProperties {
    public vcpus?: number;
    public cores?: number;
    public sockets?: number;
    public memory?: number;
    private 'host_type'?: string;
    private 'host_type_name'?: string;
    private 'available_instance_capacities'?: Array<ListHostsRspHostPropertiesAvailableInstanceCapacities>;
    public constructor() { 
    }
    public withVcpus(vcpus: number): ListHostsRspHostProperties {
        this['vcpus'] = vcpus;
        return this;
    }
    public withCores(cores: number): ListHostsRspHostProperties {
        this['cores'] = cores;
        return this;
    }
    public withSockets(sockets: number): ListHostsRspHostProperties {
        this['sockets'] = sockets;
        return this;
    }
    public withMemory(memory: number): ListHostsRspHostProperties {
        this['memory'] = memory;
        return this;
    }
    public withHostType(hostType: string): ListHostsRspHostProperties {
        this['host_type'] = hostType;
        return this;
    }
    public set hostType(hostType: string  | undefined) {
        this['host_type'] = hostType;
    }
    public get hostType(): string | undefined {
        return this['host_type'];
    }
    public withHostTypeName(hostTypeName: string): ListHostsRspHostProperties {
        this['host_type_name'] = hostTypeName;
        return this;
    }
    public set hostTypeName(hostTypeName: string  | undefined) {
        this['host_type_name'] = hostTypeName;
    }
    public get hostTypeName(): string | undefined {
        return this['host_type_name'];
    }
    public withAvailableInstanceCapacities(availableInstanceCapacities: Array<ListHostsRspHostPropertiesAvailableInstanceCapacities>): ListHostsRspHostProperties {
        this['available_instance_capacities'] = availableInstanceCapacities;
        return this;
    }
    public set availableInstanceCapacities(availableInstanceCapacities: Array<ListHostsRspHostPropertiesAvailableInstanceCapacities>  | undefined) {
        this['available_instance_capacities'] = availableInstanceCapacities;
    }
    public get availableInstanceCapacities(): Array<ListHostsRspHostPropertiesAvailableInstanceCapacities> | undefined {
        return this['available_instance_capacities'];
    }
}