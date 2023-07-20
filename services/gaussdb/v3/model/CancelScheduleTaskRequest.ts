import { CancelScheduleTask } from './CancelScheduleTask';


export class CancelScheduleTaskRequest {
    private 'X-Language'?: string;
    public body?: CancelScheduleTask;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): CancelScheduleTaskRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: CancelScheduleTask): CancelScheduleTaskRequest {
        this['body'] = body;
        return this;
    }
}