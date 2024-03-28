import { RunIefJobActionCallBackRequestBody } from './RunIefJobActionCallBackRequestBody';


export class RunIefJobActionCallBackRequest {
    public body?: RunIefJobActionCallBackRequestBody;
    public constructor() { 
    }
    public withBody(body: RunIefJobActionCallBackRequestBody): RunIefJobActionCallBackRequest {
        this['body'] = body;
        return this;
    }
}