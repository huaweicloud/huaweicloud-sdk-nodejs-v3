

export class BatchResetConsumeOffsetReq {
    public groups?: Array<string>;
    public timestamp?: number;
    public constructor() { 
    }
    public withGroups(groups: Array<string>): BatchResetConsumeOffsetReq {
        this['groups'] = groups;
        return this;
    }
    public withTimestamp(timestamp: number): BatchResetConsumeOffsetReq {
        this['timestamp'] = timestamp;
        return this;
    }
}