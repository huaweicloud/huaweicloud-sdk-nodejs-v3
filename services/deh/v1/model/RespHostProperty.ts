import { RespInstanceCapacity } from './RespInstanceCapacity';


export class RespHostProperty {
    private 'host_type'?: string;
    private 'host_type_name'?: string;
    public vcpus?: number;
    public cores?: number;
    public sockets?: number;
    public memory?: number;
    private 'available_instance_capacities'?: Array<RespInstanceCapacity>;
    public constructor(hostType?: string, hostTypeName?: string, vcpus?: number, cores?: number, sockets?: number, memory?: number, availableInstanceCapacities?: Array<RespInstanceCapacity>) { 
        this['host_type'] = hostType;
        this['host_type_name'] = hostTypeName;
        this['vcpus'] = vcpus;
        this['cores'] = cores;
        this['sockets'] = sockets;
        this['memory'] = memory;
        this['available_instance_capacities'] = availableInstanceCapacities;
    }
    public withHostType(hostType: string): RespHostProperty {
        this['host_type'] = hostType;
        return this;
    }
    public set hostType(hostType: string  | undefined) {
        this['host_type'] = hostType;
    }
    public get hostType(): string | undefined {
        return this['host_type'];
    }
    public withHostTypeName(hostTypeName: string): RespHostProperty {
        this['host_type_name'] = hostTypeName;
        return this;
    }
    public set hostTypeName(hostTypeName: string  | undefined) {
        this['host_type_name'] = hostTypeName;
    }
    public get hostTypeName(): string | undefined {
        return this['host_type_name'];
    }
    public withVcpus(vcpus: number): RespHostProperty {
        this['vcpus'] = vcpus;
        return this;
    }
    public withCores(cores: number): RespHostProperty {
        this['cores'] = cores;
        return this;
    }
    public withSockets(sockets: number): RespHostProperty {
        this['sockets'] = sockets;
        return this;
    }
    public withMemory(memory: number): RespHostProperty {
        this['memory'] = memory;
        return this;
    }
    public withAvailableInstanceCapacities(availableInstanceCapacities: Array<RespInstanceCapacity>): RespHostProperty {
        this['available_instance_capacities'] = availableInstanceCapacities;
        return this;
    }
    public set availableInstanceCapacities(availableInstanceCapacities: Array<RespInstanceCapacity>  | undefined) {
        this['available_instance_capacities'] = availableInstanceCapacities;
    }
    public get availableInstanceCapacities(): Array<RespInstanceCapacity> | undefined {
        return this['available_instance_capacities'];
    }
}