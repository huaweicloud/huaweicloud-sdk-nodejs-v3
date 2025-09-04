import { ContainerPortDTO } from './ContainerPortDTO';


export class ContainerConfigsResDTO {
    private 'host_network'?: boolean;
    private 'container_port_list'?: Array<ContainerPortDTO>;
    public constructor() { 
    }
    public withHostNetwork(hostNetwork: boolean): ContainerConfigsResDTO {
        this['host_network'] = hostNetwork;
        return this;
    }
    public set hostNetwork(hostNetwork: boolean  | undefined) {
        this['host_network'] = hostNetwork;
    }
    public get hostNetwork(): boolean | undefined {
        return this['host_network'];
    }
    public withContainerPortList(containerPortList: Array<ContainerPortDTO>): ContainerConfigsResDTO {
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