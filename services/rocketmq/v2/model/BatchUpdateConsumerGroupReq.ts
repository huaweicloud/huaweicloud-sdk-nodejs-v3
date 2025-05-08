import { BatchUpdateConsumerGroup } from './BatchUpdateConsumerGroup';


export class BatchUpdateConsumerGroupReq {
    public groups?: Array<BatchUpdateConsumerGroup>;
    public constructor() { 
    }
    public withGroups(groups: Array<BatchUpdateConsumerGroup>): BatchUpdateConsumerGroupReq {
        this['groups'] = groups;
        return this;
    }
}