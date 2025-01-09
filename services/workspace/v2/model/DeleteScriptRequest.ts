

export class DeleteScriptRequest {
    private 'script_id'?: string;
    public constructor(scriptId?: string) { 
        this['script_id'] = scriptId;
    }
    public withScriptId(scriptId: string): DeleteScriptRequest {
        this['script_id'] = scriptId;
        return this;
    }
    public set scriptId(scriptId: string  | undefined) {
        this['script_id'] = scriptId;
    }
    public get scriptId(): string | undefined {
        return this['script_id'];
    }
}