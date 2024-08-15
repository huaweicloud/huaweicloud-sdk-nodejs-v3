import { PublicScriptPropertiesModel } from './PublicScriptPropertiesModel';


export class PublicScriptListModel {
    public id?: number;
    private 'script_uuid'?: string;
    public name?: string;
    public type?: PublicScriptListModelTypeEnum | string;
    private 'gmt_created'?: number;
    public description?: string;
    public properties?: PublicScriptPropertiesModel;
    public constructor(id?: number, scriptUuid?: string, name?: string, type?: string, gmtCreated?: number, description?: string, properties?: PublicScriptPropertiesModel) { 
        this['id'] = id;
        this['script_uuid'] = scriptUuid;
        this['name'] = name;
        this['type'] = type;
        this['gmt_created'] = gmtCreated;
        this['description'] = description;
        this['properties'] = properties;
    }
    public withId(id: number): PublicScriptListModel {
        this['id'] = id;
        return this;
    }
    public withScriptUuid(scriptUuid: string): PublicScriptListModel {
        this['script_uuid'] = scriptUuid;
        return this;
    }
    public set scriptUuid(scriptUuid: string  | undefined) {
        this['script_uuid'] = scriptUuid;
    }
    public get scriptUuid(): string | undefined {
        return this['script_uuid'];
    }
    public withName(name: string): PublicScriptListModel {
        this['name'] = name;
        return this;
    }
    public withType(type: PublicScriptListModelTypeEnum | string): PublicScriptListModel {
        this['type'] = type;
        return this;
    }
    public withGmtCreated(gmtCreated: number): PublicScriptListModel {
        this['gmt_created'] = gmtCreated;
        return this;
    }
    public set gmtCreated(gmtCreated: number  | undefined) {
        this['gmt_created'] = gmtCreated;
    }
    public get gmtCreated(): number | undefined {
        return this['gmt_created'];
    }
    public withDescription(description: string): PublicScriptListModel {
        this['description'] = description;
        return this;
    }
    public withProperties(properties: PublicScriptPropertiesModel): PublicScriptListModel {
        this['properties'] = properties;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PublicScriptListModelTypeEnum {
    SHELL = 'SHELL',
    PYTHON = 'PYTHON',
    BAT = 'BAT'
}
