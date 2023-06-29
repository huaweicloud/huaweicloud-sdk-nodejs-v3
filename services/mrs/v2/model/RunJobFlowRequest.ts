import { RunJobFlowCommand } from './RunJobFlowCommand';


export class RunJobFlowRequest {
    public body?: RunJobFlowCommand;
    public constructor() { 
    }
    public withBody(body: RunJobFlowCommand): RunJobFlowRequest {
        this['body'] = body;
        return this;
    }
}