

export class BatchDeleteConsumerGroupReq {
    public groups?: Array<string>;
    public constructor() { 
    }
    public withGroups(groups: Array<string>): BatchDeleteConsumerGroupReq {
        this['groups'] = groups;
        return this;
    }
}