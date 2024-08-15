import { ScriptParamDefine } from './ScriptParamDefine';
import { ScriptPropertiesModel } from './ScriptPropertiesModel';


export class AddScriptModel {
    public name?: string;
    public properties?: ScriptPropertiesModel;
    public description?: string;
    public type?: AddScriptModelTypeEnum | string;
    public content?: string;
    private 'enterprise_project_id'?: string;
    private 'script_params'?: Array<ScriptParamDefine>;
    public constructor(name?: string, properties?: ScriptPropertiesModel, description?: string, type?: string, content?: string) { 
        this['name'] = name;
        this['properties'] = properties;
        this['description'] = description;
        this['type'] = type;
        this['content'] = content;
    }
    public withName(name: string): AddScriptModel {
        this['name'] = name;
        return this;
    }
    public withProperties(properties: ScriptPropertiesModel): AddScriptModel {
        this['properties'] = properties;
        return this;
    }
    public withDescription(description: string): AddScriptModel {
        this['description'] = description;
        return this;
    }
    public withType(type: AddScriptModelTypeEnum | string): AddScriptModel {
        this['type'] = type;
        return this;
    }
    public withContent(content: string): AddScriptModel {
        this['content'] = content;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): AddScriptModel {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withScriptParams(scriptParams: Array<ScriptParamDefine>): AddScriptModel {
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

/**
    * @export
    * @enum {string}
    */
export enum AddScriptModelTypeEnum {
    SHELL = 'SHELL',
    PYTHON = 'PYTHON',
    BAT = 'BAT'
}
