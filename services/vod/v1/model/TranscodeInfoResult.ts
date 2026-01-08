

export class TranscodeInfoResult {
    private 'template_name'?: string;
    public progress?: number;
    private 'start_time'?: string;
    private 'waiting_time'?: number;
    private 'process_time'?: number;
    public constructor() { 
    }
    public withTemplateName(templateName: string): TranscodeInfoResult {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withProgress(progress: number): TranscodeInfoResult {
        this['progress'] = progress;
        return this;
    }
    public withStartTime(startTime: string): TranscodeInfoResult {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withWaitingTime(waitingTime: number): TranscodeInfoResult {
        this['waiting_time'] = waitingTime;
        return this;
    }
    public set waitingTime(waitingTime: number  | undefined) {
        this['waiting_time'] = waitingTime;
    }
    public get waitingTime(): number | undefined {
        return this['waiting_time'];
    }
    public withProcessTime(processTime: number): TranscodeInfoResult {
        this['process_time'] = processTime;
        return this;
    }
    public set processTime(processTime: number  | undefined) {
        this['process_time'] = processTime;
    }
    public get processTime(): number | undefined {
        return this['process_time'];
    }
}