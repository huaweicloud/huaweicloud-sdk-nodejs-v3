

export class ShowGroupsRespGroupAssignment {
    public topic?: string;
    public partitions?: Array<number>;
    public constructor() { 
    }
    public withTopic(topic: string): ShowGroupsRespGroupAssignment {
        this['topic'] = topic;
        return this;
    }
    public withPartitions(partitions: Array<number>): ShowGroupsRespGroupAssignment {
        this['partitions'] = partitions;
        return this;
    }
}