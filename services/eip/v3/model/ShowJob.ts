

export class ShowJob {
    public id?: string;
    public action?: string;
    public status?: string;
    private 'error_task'?: string;
    private 'error_code'?: string;
    private 'error_message'?: string;
    private 'start_time'?: Date;
    private 'end_time'?: Date;
    public constructor() { 
    }
    public withId(id: string): ShowJob {
        this['id'] = id;
        return this;
    }
    public withAction(action: string): ShowJob {
        this['action'] = action;
        return this;
    }
    public withStatus(status: string): ShowJob {
        this['status'] = status;
        return this;
    }
    public withErrorTask(errorTask: string): ShowJob {
        this['error_task'] = errorTask;
        return this;
    }
    public set errorTask(errorTask: string  | undefined) {
        this['error_task'] = errorTask;
    }
    public get errorTask(): string | undefined {
        return this['error_task'];
    }
    public withErrorCode(errorCode: string): ShowJob {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMessage(errorMessage: string): ShowJob {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
    public withStartTime(startTime: Date): ShowJob {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: Date  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): Date | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: Date): ShowJob {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: Date  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): Date | undefined {
        return this['end_time'];
    }
}