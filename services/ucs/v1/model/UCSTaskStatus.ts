

export class UCSTaskStatus {
    public status?: string;
    public reason?: string;
    public startTime?: Date;
    public finishTime?: Date;
    public constructor() { 
    }
    public withStatus(status: string): UCSTaskStatus {
        this['status'] = status;
        return this;
    }
    public withReason(reason: string): UCSTaskStatus {
        this['reason'] = reason;
        return this;
    }
    public withStartTime(startTime: Date): UCSTaskStatus {
        this['startTime'] = startTime;
        return this;
    }
    public withFinishTime(finishTime: Date): UCSTaskStatus {
        this['finishTime'] = finishTime;
        return this;
    }
}