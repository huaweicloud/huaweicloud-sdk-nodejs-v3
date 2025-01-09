

export class ShowScriptDetailRequest {
    private 'script_id'?: string;
    private 'script_task_id'?: string;
    public constructor(scriptId?: string) { 
        this['script_id'] = scriptId;
    }
    public withScriptId(scriptId: string): ShowScriptDetailRequest {
        this['script_id'] = scriptId;
        return this;
    }
    public set scriptId(scriptId: string  | undefined) {
        this['script_id'] = scriptId;
    }
    public get scriptId(): string | undefined {
        return this['script_id'];
    }
    public withScriptTaskId(scriptTaskId: string): ShowScriptDetailRequest {
        this['script_task_id'] = scriptTaskId;
        return this;
    }
    public set scriptTaskId(scriptTaskId: string  | undefined) {
        this['script_task_id'] = scriptTaskId;
    }
    public get scriptTaskId(): string | undefined {
        return this['script_task_id'];
    }
}