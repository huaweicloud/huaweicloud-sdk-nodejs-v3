import { SelfDefinedFieldVO } from './SelfDefinedFieldVO';


export class SubjectParamsVO {
    public id?: string;
    private 'name_ch'?: string;
    private 'name_en'?: string;
    public description?: string;
    public alias?: string;
    private 'data_owner'?: string;
    private 'data_owner_list'?: string;
    public level?: number;
    private 'parent_id'?: string;
    private 'self_defined_fields'?: Array<SelfDefinedFieldVO>;
    public constructor(nameCh?: string, nameEn?: string, dataOwnerList?: string, level?: number) { 
        this['name_ch'] = nameCh;
        this['name_en'] = nameEn;
        this['data_owner_list'] = dataOwnerList;
        this['level'] = level;
    }
    public withId(id: string): SubjectParamsVO {
        this['id'] = id;
        return this;
    }
    public withNameCh(nameCh: string): SubjectParamsVO {
        this['name_ch'] = nameCh;
        return this;
    }
    public set nameCh(nameCh: string  | undefined) {
        this['name_ch'] = nameCh;
    }
    public get nameCh(): string | undefined {
        return this['name_ch'];
    }
    public withNameEn(nameEn: string): SubjectParamsVO {
        this['name_en'] = nameEn;
        return this;
    }
    public set nameEn(nameEn: string  | undefined) {
        this['name_en'] = nameEn;
    }
    public get nameEn(): string | undefined {
        return this['name_en'];
    }
    public withDescription(description: string): SubjectParamsVO {
        this['description'] = description;
        return this;
    }
    public withAlias(alias: string): SubjectParamsVO {
        this['alias'] = alias;
        return this;
    }
    public withDataOwner(dataOwner: string): SubjectParamsVO {
        this['data_owner'] = dataOwner;
        return this;
    }
    public set dataOwner(dataOwner: string  | undefined) {
        this['data_owner'] = dataOwner;
    }
    public get dataOwner(): string | undefined {
        return this['data_owner'];
    }
    public withDataOwnerList(dataOwnerList: string): SubjectParamsVO {
        this['data_owner_list'] = dataOwnerList;
        return this;
    }
    public set dataOwnerList(dataOwnerList: string  | undefined) {
        this['data_owner_list'] = dataOwnerList;
    }
    public get dataOwnerList(): string | undefined {
        return this['data_owner_list'];
    }
    public withLevel(level: number): SubjectParamsVO {
        this['level'] = level;
        return this;
    }
    public withParentId(parentId: string): SubjectParamsVO {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withSelfDefinedFields(selfDefinedFields: Array<SelfDefinedFieldVO>): SubjectParamsVO {
        this['self_defined_fields'] = selfDefinedFields;
        return this;
    }
    public set selfDefinedFields(selfDefinedFields: Array<SelfDefinedFieldVO>  | undefined) {
        this['self_defined_fields'] = selfDefinedFields;
    }
    public get selfDefinedFields(): Array<SelfDefinedFieldVO> | undefined {
        return this['self_defined_fields'];
    }
}