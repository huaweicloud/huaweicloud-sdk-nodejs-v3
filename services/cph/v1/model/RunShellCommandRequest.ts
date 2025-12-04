import { RunShellCommandRequestBody } from './RunShellCommandRequestBody';


export class RunShellCommandRequest {
    public body?: RunShellCommandRequestBody;
    public constructor() { 
    }
    public withBody(body: RunShellCommandRequestBody): RunShellCommandRequest {
        this['body'] = body;
        return this;
    }
}