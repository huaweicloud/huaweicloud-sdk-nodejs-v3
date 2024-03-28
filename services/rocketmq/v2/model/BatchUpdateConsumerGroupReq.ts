import { CreateOrUpdateConsumerGroup } from './CreateOrUpdateConsumerGroup';


export class BatchUpdateConsumerGroupReq {
    public groups?: Array<CreateOrUpdateConsumerGroup>;
    public constructor() { 
    }
    public withGroups(groups: Array<CreateOrUpdateConsumerGroup>): BatchUpdateConsumerGroupReq {
        this['groups'] = groups;
        return this;
    }
}