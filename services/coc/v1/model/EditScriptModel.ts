import { ScriptParamDefine } from './ScriptParamDefine';
import { ScriptPropertiesModel } from './ScriptPropertiesModel';


export class EditScriptModel {
    public description?: string;
    public content?: string;
    public properties?: ScriptPropertiesModel;
    private 'script_params'?: Array<ScriptParamDefine>;
    public constructor(description?: string, content?: string) { 
        this['description'] = description;
        this['content'] = content;
    }
    public withDescription(description: string): EditScriptModel {
        this['description'] = description;
        return this;
    }
    public withContent(content: string): EditScriptModel {
        this['content'] = content;
        return this;
    }
    public withProperties(properties: ScriptPropertiesModel): EditScriptModel {
        this['properties'] = properties;
        return this;
    }
    public withScriptParams(scriptParams: Array<ScriptParamDefine>): EditScriptModel {
        this['script_params'] = scriptParams;
        return this;
    }
    public set scriptParams(scriptParams: Array<ScriptParamDefine>  | undefined) {
        this['script_params'] = scriptParams;
    }
    public get scriptParams(): Array<ScriptParamDefine> | undefined {
        return this['script_params'];
    }
}