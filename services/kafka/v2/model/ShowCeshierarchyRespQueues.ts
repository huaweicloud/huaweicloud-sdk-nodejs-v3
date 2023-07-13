import { ShowCeshierarchyRespPartitions } from './ShowCeshierarchyRespPartitions';


export class ShowCeshierarchyRespQueues {
    public name?: string;
    public partitions?: Array<ShowCeshierarchyRespPartitions>;
    public constructor() { 
    }
    public withName(name: string): ShowCeshierarchyRespQueues {
        this['name'] = name;
        return this;
    }
    public withPartitions(partitions: Array<ShowCeshierarchyRespPartitions>): ShowCeshierarchyRespQueues {
        this['partitions'] = partitions;
        return this;
    }
}