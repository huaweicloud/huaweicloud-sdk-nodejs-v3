import { SetInstanceScheduleEventsRequestBody } from './SetInstanceScheduleEventsRequestBody';


export class SetInstanceScheduleEventsRequest {
    private 'X-Language'?: string;
    public body?: SetInstanceScheduleEventsRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): SetInstanceScheduleEventsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: SetInstanceScheduleEventsRequestBody): SetInstanceScheduleEventsRequest {
        this['body'] = body;
        return this;
    }
}