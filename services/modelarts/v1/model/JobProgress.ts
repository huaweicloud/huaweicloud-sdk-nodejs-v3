

export class JobProgress {
    public status?: JobProgressStatusEnum | string;
    public step?: number;
    public description?: string;
    public constructor() { 
    }
    public withStatus(status: JobProgressStatusEnum | string): JobProgress {
        this['status'] = status;
        return this;
    }
    public withStep(step: number): JobProgress {
        this['step'] = step;
        return this;
    }
    public withDescription(description: string): JobProgress {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum JobProgressStatusEnum {
    COMPLETED = 'COMPLETED',
    FAILED = 'FAILED',
    PROCESSING = 'PROCESSING',
    WAITING = 'WAITING'
}
