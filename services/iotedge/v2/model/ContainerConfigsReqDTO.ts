import { ContainerPortDTO } from './ContainerPortDTO';


export class ContainerConfigsReqDTO {
    private 'container_port_list'?: Array<ContainerPortDTO>;
    public constructor() { 
    }
    public withContainerPortList(containerPortList: Array<ContainerPortDTO>): ContainerConfigsReqDTO {
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