import { ScriptParamDefine } from './ScriptParamDefine';
import { ScriptPropertiesModel } from './ScriptPropertiesModel';


export class ScriptDetailModel {
    private 'script_uuid'?: string;
    public name?: string;
    public version?: string;
    public description?: string;
    public type?: ScriptDetailModelTypeEnum | string;
    public content?: string;
    private 'script_params'?: Array<ScriptParamDefine>;
    public status?: ScriptDetailModelStatusEnum | string;
    private 'gmt_created'?: number;
    private 'gmt_modified'?: number;
    public creator?: string;
    private 'creator_id'?: string;
    public operator?: string;
    public properties?: ScriptPropertiesModel;
    private 'enterprise_project_id'?: string;
    public constructor(scriptUuid?: string, name?: string, description?: string, type?: string, content?: string, status?: string, gmtCreated?: number, creator?: string, creatorId?: string, properties?: ScriptPropertiesModel) { 
        this['script_uuid'] = scriptUuid;
        this['name'] = name;
        this['description'] = description;
        this['type'] = type;
        this['content'] = content;
        this['status'] = status;
        this['gmt_created'] = gmtCreated;
        this['creator'] = creator;
        this['creator_id'] = creatorId;
        this['properties'] = properties;
    }
    public withScriptUuid(scriptUuid: string): ScriptDetailModel {
        this['script_uuid'] = scriptUuid;
        return this;
    }
    public set scriptUuid(scriptUuid: string  | undefined) {
        this['script_uuid'] = scriptUuid;
    }
    public get scriptUuid(): string | undefined {
        return this['script_uuid'];
    }
    public withName(name: string): ScriptDetailModel {
        this['name'] = name;
        return this;
    }
    public withVersion(version: string): ScriptDetailModel {
        this['version'] = version;
        return this;
    }
    public withDescription(description: string): ScriptDetailModel {
        this['description'] = description;
        return this;
    }
    public withType(type: ScriptDetailModelTypeEnum | string): ScriptDetailModel {
        this['type'] = type;
        return this;
    }
    public withContent(content: string): ScriptDetailModel {
        this['content'] = content;
        return this;
    }
    public withScriptParams(scriptParams: Array<ScriptParamDefine>): ScriptDetailModel {
        this['script_params'] = scriptParams;
        return this;
    }
    public set scriptParams(scriptParams: Array<ScriptParamDefine>  | undefined) {
        this['script_params'] = scriptParams;
    }
    public get scriptParams(): Array<ScriptParamDefine> | undefined {
        return this['script_params'];
    }
    public withStatus(status: ScriptDetailModelStatusEnum | string): ScriptDetailModel {
        this['status'] = status;
        return this;
    }
    public withGmtCreated(gmtCreated: number): ScriptDetailModel {
        this['gmt_created'] = gmtCreated;
        return this;
    }
    public set gmtCreated(gmtCreated: number  | undefined) {
        this['gmt_created'] = gmtCreated;
    }
    public get gmtCreated(): number | undefined {
        return this['gmt_created'];
    }
    public withGmtModified(gmtModified: number): ScriptDetailModel {
        this['gmt_modified'] = gmtModified;
        return this;
    }
    public set gmtModified(gmtModified: number  | undefined) {
        this['gmt_modified'] = gmtModified;
    }
    public get gmtModified(): number | undefined {
        return this['gmt_modified'];
    }
    public withCreator(creator: string): ScriptDetailModel {
        this['creator'] = creator;
        return this;
    }
    public withCreatorId(creatorId: string): ScriptDetailModel {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: string  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): string | undefined {
        return this['creator_id'];
    }
    public withOperator(operator: string): ScriptDetailModel {
        this['operator'] = operator;
        return this;
    }
    public withProperties(properties: ScriptPropertiesModel): ScriptDetailModel {
        this['properties'] = properties;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ScriptDetailModel {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ScriptDetailModelTypeEnum {
    SHELL = 'SHELL',
    PYTHON = 'PYTHON',
    BAT = 'BAT'
}
/**
    * @export
    * @enum {string}
    */
export enum ScriptDetailModelStatusEnum {
    PENDING_APPROVE = 'PENDING_APPROVE',
    APPROVED = 'APPROVED',
    REJECTED = 'REJECTED'
}
