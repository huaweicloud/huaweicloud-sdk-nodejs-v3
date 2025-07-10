import { ClearAlarmRequestBody } from './ClearAlarmRequestBody';


export class ClearAlarmRequest {
    public body?: ClearAlarmRequestBody;
    public constructor() { 
    }
    public withBody(body: ClearAlarmRequestBody): ClearAlarmRequest {
        this['body'] = body;
        return this;
    }
}