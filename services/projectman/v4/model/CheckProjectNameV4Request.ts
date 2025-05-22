import { CheckProjectNameRequestV4 } from './CheckProjectNameRequestV4';


export class CheckProjectNameV4Request {
    public body?: CheckProjectNameRequestV4;
    public constructor() { 
    }
    public withBody(body: CheckProjectNameRequestV4): CheckProjectNameV4Request {
        this['body'] = body;
        return this;
    }
}