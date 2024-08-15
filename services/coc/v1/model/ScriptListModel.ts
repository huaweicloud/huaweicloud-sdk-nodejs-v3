import { ScriptPropertiesModel } from './ScriptPropertiesModel';


export class ScriptListModel {
    public id?: number;
    private 'script_uuid'?: string;
    private 'enterprise_project_id'?: string;
    public name?: string;
    public type?: ScriptListModelTypeEnum | string;
    public status?: ScriptListModelStatusEnum | string;
    private 'gmt_created'?: number;
    private 'gmt_modified'?: number;
    public creator?: string;
    private 'creator_id'?: string;
    public operator?: string;
    public properties?: ScriptPropertiesModel;
    public constructor(id?: number, scriptUuid?: string, enterpriseProjectId?: string, name?: string, type?: string, status?: string, gmtCreated?: number, creator?: string, creatorId?: string, properties?: ScriptPropertiesModel) { 
        this['id'] = id;
        this['script_uuid'] = scriptUuid;
        this['enterprise_project_id'] = enterpriseProjectId;
        this['name'] = name;
        this['type'] = type;
        this['status'] = status;
        this['gmt_created'] = gmtCreated;
        this['creator'] = creator;
        this['creator_id'] = creatorId;
        this['properties'] = properties;
    }
    public withId(id: number): ScriptListModel {
        this['id'] = id;
        return this;
    }
    public withScriptUuid(scriptUuid: string): ScriptListModel {
        this['script_uuid'] = scriptUuid;
        return this;
    }
    public set scriptUuid(scriptUuid: string  | undefined) {
        this['script_uuid'] = scriptUuid;
    }
    public get scriptUuid(): string | undefined {
        return this['script_uuid'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ScriptListModel {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withName(name: string): ScriptListModel {
        this['name'] = name;
        return this;
    }
    public withType(type: ScriptListModelTypeEnum | string): ScriptListModel {
        this['type'] = type;
        return this;
    }
    public withStatus(status: ScriptListModelStatusEnum | string): ScriptListModel {
        this['status'] = status;
        return this;
    }
    public withGmtCreated(gmtCreated: number): ScriptListModel {
        this['gmt_created'] = gmtCreated;
        return this;
    }
    public set gmtCreated(gmtCreated: number  | undefined) {
        this['gmt_created'] = gmtCreated;
    }
    public get gmtCreated(): number | undefined {
        return this['gmt_created'];
    }
    public withGmtModified(gmtModified: number): ScriptListModel {
        this['gmt_modified'] = gmtModified;
        return this;
    }
    public set gmtModified(gmtModified: number  | undefined) {
        this['gmt_modified'] = gmtModified;
    }
    public get gmtModified(): number | undefined {
        return this['gmt_modified'];
    }
    public withCreator(creator: string): ScriptListModel {
        this['creator'] = creator;
        return this;
    }
    public withCreatorId(creatorId: string): ScriptListModel {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: string  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): string | undefined {
        return this['creator_id'];
    }
    public withOperator(operator: string): ScriptListModel {
        this['operator'] = operator;
        return this;
    }
    public withProperties(properties: ScriptPropertiesModel): ScriptListModel {
        this['properties'] = properties;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ScriptListModelTypeEnum {
    SHELL = 'SHELL',
    PYTHON = 'PYTHON',
    BAT = 'BAT'
}
/**
    * @export
    * @enum {string}
    */
export enum ScriptListModelStatusEnum {
    PENDING_APPROVE = 'PENDING_APPROVE',
    APPROVED = 'APPROVED',
    REJECTED = 'REJECTED'
}
