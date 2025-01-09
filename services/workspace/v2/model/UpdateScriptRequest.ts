import { UpdateScriptReq } from './UpdateScriptReq';


export class UpdateScriptRequest {
    private 'script_id'?: string;
    public body?: UpdateScriptReq;
    public constructor(scriptId?: string) { 
        this['script_id'] = scriptId;
    }
    public withScriptId(scriptId: string): UpdateScriptRequest {
        this['script_id'] = scriptId;
        return this;
    }
    public set scriptId(scriptId: string  | undefined) {
        this['script_id'] = scriptId;
    }
    public get scriptId(): string | undefined {
        return this['script_id'];
    }
    public withBody(body: UpdateScriptReq): UpdateScriptRequest {
        this['body'] = body;
        return this;
    }
}