import { ContainerPortDTO } from './ContainerPortDTO';


export class ContainerConfigsDTO {
    public privileged?: boolean;
    private 'host_network'?: boolean;
    private 'restart_policy'?: string;
    private 'container_port_list'?: Array<ContainerPortDTO>;
    public constructor(restartPolicy?: string) { 
        this['restart_policy'] = restartPolicy;
    }
    public withPrivileged(privileged: boolean): ContainerConfigsDTO {
        this['privileged'] = privileged;
        return this;
    }
    public withHostNetwork(hostNetwork: boolean): ContainerConfigsDTO {
        this['host_network'] = hostNetwork;
        return this;
    }
    public set hostNetwork(hostNetwork: boolean  | undefined) {
        this['host_network'] = hostNetwork;
    }
    public get hostNetwork(): boolean | undefined {
        return this['host_network'];
    }
    public withRestartPolicy(restartPolicy: string): ContainerConfigsDTO {
        this['restart_policy'] = restartPolicy;
        return this;
    }
    public set restartPolicy(restartPolicy: string  | undefined) {
        this['restart_policy'] = restartPolicy;
    }
    public get restartPolicy(): string | undefined {
        return this['restart_policy'];
    }
    public withContainerPortList(containerPortList: Array<ContainerPortDTO>): ContainerConfigsDTO {
        this['container_port_list'] = containerPortList;
        return this;
    }
    public set containerPortList(containerPortList: Array<ContainerPortDTO>  | undefined) {
        this['container_port_list'] = containerPortList;
    }
    public get containerPortList(): Array<ContainerPortDTO> | undefined {
        return this['container_port_list'];
    }
}