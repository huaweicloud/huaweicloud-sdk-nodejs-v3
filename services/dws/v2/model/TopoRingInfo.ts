import { TopoInstanceInfo } from './TopoInstanceInfo';


export class TopoRingInfo {
    private 'instance_info_lists'?: Array<TopoInstanceInfo>;
    public constructor() { 
    }
    public withInstanceInfoLists(instanceInfoLists: Array<TopoInstanceInfo>): TopoRingInfo {
        this['instance_info_lists'] = instanceInfoLists;
        return this;
    }
    public set instanceInfoLists(instanceInfoLists: Array<TopoInstanceInfo>  | undefined) {
        this['instance_info_lists'] = instanceInfoLists;
    }
    public get instanceInfoLists(): Array<TopoInstanceInfo> | undefined {
        return this['instance_info_lists'];
    }
}