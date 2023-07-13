import { ShowCeshierarchyRespQueues1 } from './ShowCeshierarchyRespQueues1';


export class ShowCeshierarchyRespGroups {
    public name?: string;
    public queues?: Array<ShowCeshierarchyRespQueues1>;
    public constructor() { 
    }
    public withName(name: string): ShowCeshierarchyRespGroups {
        this['name'] = name;
        return this;
    }
    public withQueues(queues: Array<ShowCeshierarchyRespQueues1>): ShowCeshierarchyRespGroups {
        this['queues'] = queues;
        return this;
    }
}