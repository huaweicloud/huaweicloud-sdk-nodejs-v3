import { LayerType } from './LayerType';


export class DataLayerVO {
    public id?: string;
    public level?: number;
    public name?: string;
    public type?: LayerType;
    public description?: string;
    private 'is_default'?: boolean;
    private 'disabled_customized_field_ids'?: Array<string>;
    public constructor(level?: number, name?: string, type?: LayerType) { 
        this['level'] = level;
        this['name'] = name;
        this['type'] = type;
    }
    public withId(id: string): DataLayerVO {
        this['id'] = id;
        return this;
    }
    public withLevel(level: number): DataLayerVO {
        this['level'] = level;
        return this;
    }
    public withName(name: string): DataLayerVO {
        this['name'] = name;
        return this;
    }
    public withType(type: LayerType): DataLayerVO {
        this['type'] = type;
        return this;
    }
    public withDescription(description: string): DataLayerVO {
        this['description'] = description;
        return this;
    }
    public withIsDefault(isDefault: boolean): DataLayerVO {
        this['is_default'] = isDefault;
        return this;
    }
    public set isDefault(isDefault: boolean  | undefined) {
        this['is_default'] = isDefault;
    }
    public get isDefault(): boolean | undefined {
        return this['is_default'];
    }
    public withDisabledCustomizedFieldIds(disabledCustomizedFieldIds: Array<string>): DataLayerVO {
        this['disabled_customized_field_ids'] = disabledCustomizedFieldIds;
        return this;
    }
    public set disabledCustomizedFieldIds(disabledCustomizedFieldIds: Array<string>  | undefined) {
        this['disabled_customized_field_ids'] = disabledCustomizedFieldIds;
    }
    public get disabledCustomizedFieldIds(): Array<string> | undefined {
        return this['disabled_customized_field_ids'];
    }
}