import { BizAppParam } from './BizAppParam';


export class CreateAppRequest {
    public body?: BizAppParam;
    public constructor() { 
    }
    public withBody(body: BizAppParam): CreateAppRequest {
        this['body'] = body;
        return this;
    }
}