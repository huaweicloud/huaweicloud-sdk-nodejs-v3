import { AnalysisScriptParam } from './AnalysisScriptParam';
import { AnalysisScriptType } from './AnalysisScriptType';


export class UpdateAnalysisScriptRequestBody {
    private 'script_name'?: string;
    public directory?: string;
    public description?: string;
    private 'script_type'?: AnalysisScriptType;
    private 'retrieve_table_id'?: string;
    public script?: string;
    public owner?: Array<AnalysisScriptParam>;
    private 'script_params'?: Array<AnalysisScriptParam>;
    public constructor(scriptName?: string, scriptType?: AnalysisScriptType, script?: string, scriptParams?: Array<AnalysisScriptParam>) { 
        this['script_name'] = scriptName;
        this['script_type'] = scriptType;
        this['script'] = script;
        this['script_params'] = scriptParams;
    }
    public withScriptName(scriptName: string): UpdateAnalysisScriptRequestBody {
        this['script_name'] = scriptName;
        return this;
    }
    public set scriptName(scriptName: string  | undefined) {
        this['script_name'] = scriptName;
    }
    public get scriptName(): string | undefined {
        return this['script_name'];
    }
    public withDirectory(directory: string): UpdateAnalysisScriptRequestBody {
        this['directory'] = directory;
        return this;
    }
    public withDescription(description: string): UpdateAnalysisScriptRequestBody {
        this['description'] = description;
        return this;
    }
    public withScriptType(scriptType: AnalysisScriptType): UpdateAnalysisScriptRequestBody {
        this['script_type'] = scriptType;
        return this;
    }
    public set scriptType(scriptType: AnalysisScriptType  | undefined) {
        this['script_type'] = scriptType;
    }
    public get scriptType(): AnalysisScriptType | undefined {
        return this['script_type'];
    }
    public withRetrieveTableId(retrieveTableId: string): UpdateAnalysisScriptRequestBody {
        this['retrieve_table_id'] = retrieveTableId;
        return this;
    }
    public set retrieveTableId(retrieveTableId: string  | undefined) {
        this['retrieve_table_id'] = retrieveTableId;
    }
    public get retrieveTableId(): string | undefined {
        return this['retrieve_table_id'];
    }
    public withScript(script: string): UpdateAnalysisScriptRequestBody {
        this['script'] = script;
        return this;
    }
    public withOwner(owner: Array<AnalysisScriptParam>): UpdateAnalysisScriptRequestBody {
        this['owner'] = owner;
        return this;
    }
    public withScriptParams(scriptParams: Array<AnalysisScriptParam>): UpdateAnalysisScriptRequestBody {
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