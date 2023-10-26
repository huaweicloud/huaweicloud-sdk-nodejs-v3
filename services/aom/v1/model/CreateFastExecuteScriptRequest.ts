import { HISFastScript } from './HISFastScript';


export class CreateFastExecuteScriptRequest {
    public body?: HISFastScript;
    public constructor() { 
    }
    public withBody(body: HISFastScript): CreateFastExecuteScriptRequest {
        this['body'] = body;
        return this;
    }
}