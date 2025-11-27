

export class UCSJobStatus {
    public status?: string;
    public reason?: string;
    public startTime?: Date;
    public finishTime?: Date;
    public constructor() { 
    }
    public withStatus(status: string): UCSJobStatus {
        this['status'] = status;
        return this;
    }
    public withReason(reason: string): UCSJobStatus {
        this['reason'] = reason;
        return this;
    }
    public withStartTime(startTime: Date): UCSJobStatus {
        this['startTime'] = startTime;
        return this;
    }
    public withFinishTime(finishTime: Date): UCSJobStatus {
        this['finishTime'] = finishTime;
        return this;
    }
}