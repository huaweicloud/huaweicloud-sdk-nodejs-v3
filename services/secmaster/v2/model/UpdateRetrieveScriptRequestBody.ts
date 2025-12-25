

export class UpdateRetrieveScriptRequestBody {
    private 'script_name'?: string;
    public directory?: string;
    public description?: string;
    public script?: string;
    public constructor() { 
    }
    public withScriptName(scriptName: string): UpdateRetrieveScriptRequestBody {
        this['script_name'] = scriptName;
        return this;
    }
    public set scriptName(scriptName: string  | undefined) {
        this['script_name'] = scriptName;
    }
    public get scriptName(): string | undefined {
        return this['script_name'];
    }
    public withDirectory(directory: string): UpdateRetrieveScriptRequestBody {
        this['directory'] = directory;
        return this;
    }
    public withDescription(description: string): UpdateRetrieveScriptRequestBody {
        this['description'] = description;
        return this;
    }
    public withScript(script: string): UpdateRetrieveScriptRequestBody {
        this['script'] = script;
        return this;
    }
}