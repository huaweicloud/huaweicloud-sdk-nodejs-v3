import { ScriptCategory } from './ScriptCategory';


export class CreateRetrieveScriptRequestBody {
    private 'table_id'?: string;
    private 'script_name'?: string;
    public category?: ScriptCategory;
    public directory?: string;
    public description?: string;
    public script?: string;
    public constructor(tableId?: string, scriptName?: string, category?: ScriptCategory, script?: string) { 
        this['table_id'] = tableId;
        this['script_name'] = scriptName;
        this['category'] = category;
        this['script'] = script;
    }
    public withTableId(tableId: string): CreateRetrieveScriptRequestBody {
        this['table_id'] = tableId;
        return this;
    }
    public set tableId(tableId: string  | undefined) {
        this['table_id'] = tableId;
    }
    public get tableId(): string | undefined {
        return this['table_id'];
    }
    public withScriptName(scriptName: string): CreateRetrieveScriptRequestBody {
        this['script_name'] = scriptName;
        return this;
    }
    public set scriptName(scriptName: string  | undefined) {
        this['script_name'] = scriptName;
    }
    public get scriptName(): string | undefined {
        return this['script_name'];
    }
    public withCategory(category: ScriptCategory): CreateRetrieveScriptRequestBody {
        this['category'] = category;
        return this;
    }
    public withDirectory(directory: string): CreateRetrieveScriptRequestBody {
        this['directory'] = directory;
        return this;
    }
    public withDescription(description: string): CreateRetrieveScriptRequestBody {
        this['description'] = description;
        return this;
    }
    public withScript(script: string): CreateRetrieveScriptRequestBody {
        this['script'] = script;
        return this;
    }
}