import { RunSyncCommandRequestBody } from './RunSyncCommandRequestBody';


export class RunSyncCommandRequest {
    public body?: RunSyncCommandRequestBody;
    public constructor() { 
    }
    public withBody(body: RunSyncCommandRequestBody): RunSyncCommandRequest {
        this['body'] = body;
        return this;
    }
}