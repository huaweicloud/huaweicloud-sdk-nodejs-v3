import { ExecuteScriptByDesktopTagReq } from './ExecuteScriptByDesktopTagReq';


export class ExecuteScriptByDesktopTagRequest {
    public body?: ExecuteScriptByDesktopTagReq;
    public constructor() { 
    }
    public withBody(body: ExecuteScriptByDesktopTagReq): ExecuteScriptByDesktopTagRequest {
        this['body'] = body;
        return this;
    }
}