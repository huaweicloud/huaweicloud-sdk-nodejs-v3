

export class MessageResult {
    public status?: string;
    private 'created_time'?: string | undefined;
    private 'finished_time'?: string | undefined;
    public constructor() { 
    }
    public withStatus(status: string): MessageResult {
        this['status'] = status;
        return this;
    }
    public withCreatedTime(createdTime: string): MessageResult {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime() {
        return this['created_time'];
    }
    public withFinishedTime(finishedTime: string): MessageResult {
        this['finished_time'] = finishedTime;
        return this;
    }
    public set finishedTime(finishedTime: string | undefined) {
        this['finished_time'] = finishedTime;
    }
    public get finishedTime() {
        return this['finished_time'];
    }
}