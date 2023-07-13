import { ConsumerGroup } from './ConsumerGroup';


export class BatchUpdateConsumerGroupReq {
    public groups?: Array<ConsumerGroup>;
    public constructor() { 
    }
    public withGroups(groups: Array<ConsumerGroup>): BatchUpdateConsumerGroupReq {
        this['groups'] = groups;
        return this;
    }
}