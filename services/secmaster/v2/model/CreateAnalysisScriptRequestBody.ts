import { AnalysisScriptParam } from './AnalysisScriptParam';
import { AnalysisScriptType } from './AnalysisScriptType';
import { ScriptCategory } from './ScriptCategory';


export class CreateAnalysisScriptRequestBody {
    private 'script_name'?: string;
    public category?: ScriptCategory;
    public directory?: string;
    public description?: string;
    private 'script_type'?: AnalysisScriptType;
    private 'retrieve_table_id'?: string;
    private 'retrieve_table_name'?: string;
    public script?: string;
    public owner?: string;
    private 'script_params'?: Array<AnalysisScriptParam>;
    public constructor(scriptName?: string, category?: ScriptCategory, scriptType?: AnalysisScriptType, script?: string, scriptParams?: Array<AnalysisScriptParam>) { 
        this['script_name'] = scriptName;
        this['category'] = category;
        this['script_type'] = scriptType;
        this['script'] = script;
        this['script_params'] = scriptParams;
    }
    public withScriptName(scriptName: string): CreateAnalysisScriptRequestBody {
        this['script_name'] = scriptName;
        return this;
    }
    public set scriptName(scriptName: string  | undefined) {
        this['script_name'] = scriptName;
    }
    public get scriptName(): string | undefined {
        return this['script_name'];
    }
    public withCategory(category: ScriptCategory): CreateAnalysisScriptRequestBody {
        this['category'] = category;
        return this;
    }
    public withDirectory(directory: string): CreateAnalysisScriptRequestBody {
        this['directory'] = directory;
        return this;
    }
    public withDescription(description: string): CreateAnalysisScriptRequestBody {
        this['description'] = description;
        return this;
    }
    public withScriptType(scriptType: AnalysisScriptType): CreateAnalysisScriptRequestBody {
        this['script_type'] = scriptType;
        return this;
    }
    public set scriptType(scriptType: AnalysisScriptType  | undefined) {
        this['script_type'] = scriptType;
    }
    public get scriptType(): AnalysisScriptType | undefined {
        return this['script_type'];
    }
    public withRetrieveTableId(retrieveTableId: string): CreateAnalysisScriptRequestBody {
        this['retrieve_table_id'] = retrieveTableId;
        return this;
    }
    public set retrieveTableId(retrieveTableId: string  | undefined) {
        this['retrieve_table_id'] = retrieveTableId;
    }
    public get retrieveTableId(): string | undefined {
        return this['retrieve_table_id'];
    }
    public withRetrieveTableName(retrieveTableName: string): CreateAnalysisScriptRequestBody {
        this['retrieve_table_name'] = retrieveTableName;
        return this;
    }
    public set retrieveTableName(retrieveTableName: string  | undefined) {
        this['retrieve_table_name'] = retrieveTableName;
    }
    public get retrieveTableName(): string | undefined {
        return this['retrieve_table_name'];
    }
    public withScript(script: string): CreateAnalysisScriptRequestBody {
        this['script'] = script;
        return this;
    }
    public withOwner(owner: string): CreateAnalysisScriptRequestBody {
        this['owner'] = owner;
        return this;
    }
    public withScriptParams(scriptParams: Array<AnalysisScriptParam>): CreateAnalysisScriptRequestBody {
        this['script_params'] = scriptParams;
        return this;
    }
    public set scriptParams(scriptParams: Array<AnalysisScriptParam>  | undefined) {
        this['script_params'] = scriptParams;
    }
    public get scriptParams(): Array<AnalysisScriptParam> | undefined {
        return this['script_params'];
    }
}