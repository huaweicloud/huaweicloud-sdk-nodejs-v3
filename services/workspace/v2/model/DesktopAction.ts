

export class DesktopAction {
    public action?: string;
    public message?: string;
    private 'start_time'?: string;
    private 'finish_time'?: string;
    public result?: string;
    public traceback?: string;
    public constructor() { 
    }
    public withAction(action: string): DesktopAction {
        this['action'] = action;
        return this;
    }
    public withMessage(message: string): DesktopAction {
        this['message'] = message;
        return this;
    }
    public withStartTime(startTime: string): DesktopAction {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withFinishTime(finishTime: string): DesktopAction {
        this['finish_time'] = finishTime;
        return this;
    }
    public set finishTime(finishTime: string  | undefined) {
        this['finish_time'] = finishTime;
    }
    public get finishTime(): string | undefined {
        return this['finish_time'];
    }
    public withResult(result: string): DesktopAction {
        this['result'] = result;
        return this;
    }
    public withTraceback(traceback: string): DesktopAction {
        this['traceback'] = traceback;
        return this;
    }
}