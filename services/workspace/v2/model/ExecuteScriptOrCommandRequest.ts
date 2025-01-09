import { ExecuteScriptOrCommandReq } from './ExecuteScriptOrCommandReq';


export class ExecuteScriptOrCommandRequest {
    public body?: ExecuteScriptOrCommandReq;
    public constructor() { 
    }
    public withBody(body: ExecuteScriptOrCommandReq): ExecuteScriptOrCommandRequest {
        this['body'] = body;
        return this;
    }
}