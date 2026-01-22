import { ShowCeshierarchyRespTopics } from './ShowCeshierarchyRespTopics';


export class ShowCeshierarchyRespGroups {
    public name?: string;
    public topics?: Array<ShowCeshierarchyRespTopics>;
    public constructor() { 
    }
    public withName(name: string): ShowCeshierarchyRespGroups {
        this['name'] = name;
        return this;
    }
    public withTopics(topics: Array<ShowCeshierarchyRespTopics>): ShowCeshierarchyRespGroups {
        this['topics'] = topics;
        return this;
    }
}