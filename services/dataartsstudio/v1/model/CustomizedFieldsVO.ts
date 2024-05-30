

export class CustomizedFieldsVO {
    public id?: string;
    private 'name_ch'?: string;
    private 'name_en'?: string;
    private 'not_null'?: boolean;
    private 'optional_values'?: string;
    public type?: CustomizedFieldsVOTypeEnum | string;
    public ordinal?: number;
    public description?: string;
    private 'create_by'?: string;
    private 'update_by'?: string;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    public constructor(nameCh?: string, nameEn?: string, notNull?: boolean, type?: string) { 
        this['name_ch'] = nameCh;
        this['name_en'] = nameEn;
        this['not_null'] = notNull;
        this['type'] = type;
    }
    public withId(id: string): CustomizedFieldsVO {
        this['id'] = id;
        return this;
    }
    public withNameCh(nameCh: string): CustomizedFieldsVO {
        this['name_ch'] = nameCh;
        return this;
    }
    public set nameCh(nameCh: string  | undefined) {
        this['name_ch'] = nameCh;
    }
    public get nameCh(): string | undefined {
        return this['name_ch'];
    }
    public withNameEn(nameEn: string): CustomizedFieldsVO {
        this['name_en'] = nameEn;
        return this;
    }
    public set nameEn(nameEn: string  | undefined) {
        this['name_en'] = nameEn;
    }
    public get nameEn(): string | undefined {
        return this['name_en'];
    }
    public withNotNull(notNull: boolean): CustomizedFieldsVO {
        this['not_null'] = notNull;
        return this;
    }
    public set notNull(notNull: boolean  | undefined) {
        this['not_null'] = notNull;
    }
    public get notNull(): boolean | undefined {
        return this['not_null'];
    }
    public withOptionalValues(optionalValues: string): CustomizedFieldsVO {
        this['optional_values'] = optionalValues;
        return this;
    }
    public set optionalValues(optionalValues: string  | undefined) {
        this['optional_values'] = optionalValues;
    }
    public get optionalValues(): string | undefined {
        return this['optional_values'];
    }
    public withType(type: CustomizedFieldsVOTypeEnum | string): CustomizedFieldsVO {
        this['type'] = type;
        return this;
    }
    public withOrdinal(ordinal: number): CustomizedFieldsVO {
        this['ordinal'] = ordinal;
        return this;
    }
    public withDescription(description: string): CustomizedFieldsVO {
        this['description'] = description;
        return this;
    }
    public withCreateBy(createBy: string): CustomizedFieldsVO {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withUpdateBy(updateBy: string): CustomizedFieldsVO {
        this['update_by'] = updateBy;
        return this;
    }
    public set updateBy(updateBy: string  | undefined) {
        this['update_by'] = updateBy;
    }
    public get updateBy(): string | undefined {
        return this['update_by'];
    }
    public withCreateTime(createTime: Date): CustomizedFieldsVO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): CustomizedFieldsVO {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CustomizedFieldsVOTypeEnum {
    TABLE = 'TABLE',
    ATTRIBUTE = 'ATTRIBUTE',
    SUBJECT = 'SUBJECT',
    METRIC = 'METRIC'
}
