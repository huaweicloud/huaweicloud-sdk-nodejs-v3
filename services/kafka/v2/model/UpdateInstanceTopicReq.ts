import { UpdateInstanceTopicReqTopics } from './UpdateInstanceTopicReqTopics';


export class UpdateInstanceTopicReq {
    public topics?: Array<UpdateInstanceTopicReqTopics>;
    public constructor() { 
    }
    public withTopics(topics: Array<UpdateInstanceTopicReqTopics>): UpdateInstanceTopicReq {
        this['topics'] = topics;
        return this;
    }
}