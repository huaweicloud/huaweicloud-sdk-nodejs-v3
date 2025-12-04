import { OperateEventReq } from './OperateEventReq';


export class BatchExecuteEventsRequest {
    private 'X-Language'?: string;
    public body?: OperateEventReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): BatchExecuteEventsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: OperateEventReq): BatchExecuteEventsRequest {
        this['body'] = body;
        return this;
    }
}