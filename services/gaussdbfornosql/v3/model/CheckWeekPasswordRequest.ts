import { CheckWeekPasswordRequestBody } from './CheckWeekPasswordRequestBody';


export class CheckWeekPasswordRequest {
    public body?: CheckWeekPasswordRequestBody;
    public constructor() { 
    }
    public withBody(body: CheckWeekPasswordRequestBody): CheckWeekPasswordRequest {
        this['body'] = body;
        return this;
    }
}