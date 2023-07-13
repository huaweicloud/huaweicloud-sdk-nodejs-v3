import { ShowCeshierarchyRespPartitions } from './ShowCeshierarchyRespPartitions';


export class ShowCeshierarchyRespQueues1 {
    public name?: string;
    public partitions?: Array<ShowCeshierarchyRespPartitions>;
    public constructor() { 
    }
    public withName(name: string): ShowCeshierarchyRespQueues1 {
        this['name'] = name;
        return this;
    }
    public withPartitions(partitions: Array<ShowCeshierarchyRespPartitions>): ShowCeshierarchyRespQueues1 {
        this['partitions'] = partitions;
        return this;
    }
}