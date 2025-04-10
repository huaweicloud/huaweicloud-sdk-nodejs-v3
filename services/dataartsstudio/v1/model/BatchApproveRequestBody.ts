

export class BatchApproveRequestBody {
    public reason?: string;
    public ids?: Array<string>;
    public constructor() { 
    }
    public withReason(reason: string): BatchApproveRequestBody {
        this['reason'] = reason;
        return this;
    }
    public withIds(ids: Array<string>): BatchApproveRequestBody {
        this['ids'] = ids;
        return this;
    }
}