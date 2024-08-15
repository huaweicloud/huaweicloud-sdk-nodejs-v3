import { PublicScriptPropertiesModel } from './PublicScriptPropertiesModel';
import { ScriptParamDefine } from './ScriptParamDefine';


export class PublicScriptDetailModel {
    private 'script_uuid'?: string;
    public name?: string;
    public description?: string;
    public type?: PublicScriptDetailModelTypeEnum | string;
    public content?: string;
    private 'script_params'?: Array<ScriptParamDefine>;
    private 'gmt_created'?: number;
    public properties?: PublicScriptPropertiesModel;
    public constructor(scriptUuid?: string, name?: string, description?: string, type?: string, content?: string, gmtCreated?: number, properties?: PublicScriptPropertiesModel) { 
        this['script_uuid'] = scriptUuid;
        this['name'] = name;
        this['description'] = description;
        this['type'] = type;
        this['content'] = content;
        this['gmt_created'] = gmtCreated;
        this['properties'] = properties;
    }
    public withScriptUuid(scriptUuid: string): PublicScriptDetailModel {
        this['script_uuid'] = scriptUuid;
        return this;
    }
    public set scriptUuid(scriptUuid: string  | undefined) {
        this['script_uuid'] = scriptUuid;
    }
    public get scriptUuid(): string | undefined {
        return this['script_uuid'];
    }
    public withName(name: string): PublicScriptDetailModel {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): PublicScriptDetailModel {
        this['description'] = description;
        return this;
    }
    public withType(type: PublicScriptDetailModelTypeEnum | string): PublicScriptDetailModel {
        this['type'] = type;
        return this;
    }
    public withContent(content: string): PublicScriptDetailModel {
        this['content'] = content;
        return this;
    }
    public withScriptParams(scriptParams: Array<ScriptParamDefine>): PublicScriptDetailModel {
        this['script_params'] = scriptParams;
        return this;
    }
    public set scriptParams(scriptParams: Array<ScriptParamDefine>  | undefined) {
        this['script_params'] = scriptParams;
    }
    public get scriptParams(): Array<ScriptParamDefine> | undefined {
        return this['script_params'];
    }
    public withGmtCreated(gmtCreated: number): PublicScriptDetailModel {
        this['gmt_created'] = gmtCreated;
        return this;
    }
    public set gmtCreated(gmtCreated: number  | undefined) {
        this['gmt_created'] = gmtCreated;
    }
    public get gmtCreated(): number | undefined {
        return this['gmt_created'];
    }
    public withProperties(properties: PublicScriptPropertiesModel): PublicScriptDetailModel {
        this['properties'] = properties;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PublicScriptDetailModelTypeEnum {
    SHELL = 'SHELL',
    PYTHON = 'PYTHON',
    BAT = 'BAT'
}
