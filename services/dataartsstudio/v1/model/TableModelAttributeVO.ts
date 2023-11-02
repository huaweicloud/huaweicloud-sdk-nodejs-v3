import { DataTypeDomainEnum } from './DataTypeDomainEnum';
import { QualityInfoVO } from './QualityInfoVO';
import { SelfDefinedFieldVO } from './SelfDefinedFieldVO';
import { TagVO } from './TagVO';


export class TableModelAttributeVO {
    public id?: number;
    private 'name_en'?: string;
    private 'name_ch'?: string;
    public description?: string;
    private 'obs_location'?: string;
    private 'create_by'?: string;
    private 'update_by'?: string;
    private 'data_type'?: string;
    private 'domain_type'?: DataTypeDomainEnum;
    private 'data_type_extend'?: string;
    private 'is_primary_key'?: boolean;
    private 'is_partition_key'?: boolean;
    private 'is_foreign_key'?: boolean;
    private 'extend_field'?: boolean;
    private 'not_null'?: boolean;
    public ordinal?: number;
    private 'table_model_id'?: number;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    public tags?: Array<TagVO>;
    private 'stand_row_id'?: number;
    private 'stand_row_name'?: string;
    private 'quality_infos'?: Array<QualityInfoVO>;
    public alias?: string;
    private 'self_defined_fields'?: Array<SelfDefinedFieldVO>;
    public constructor(nameEn?: string, nameCh?: string, dataType?: string, isPrimaryKey?: boolean) { 
        this['name_en'] = nameEn;
        this['name_ch'] = nameCh;
        this['data_type'] = dataType;
        this['is_primary_key'] = isPrimaryKey;
    }
    public withId(id: number): TableModelAttributeVO {
        this['id'] = id;
        return this;
    }
    public withNameEn(nameEn: string): TableModelAttributeVO {
        this['name_en'] = nameEn;
        return this;
    }
    public set nameEn(nameEn: string  | undefined) {
        this['name_en'] = nameEn;
    }
    public get nameEn(): string | undefined {
        return this['name_en'];
    }
    public withNameCh(nameCh: string): TableModelAttributeVO {
        this['name_ch'] = nameCh;
        return this;
    }
    public set nameCh(nameCh: string  | undefined) {
        this['name_ch'] = nameCh;
    }
    public get nameCh(): string | undefined {
        return this['name_ch'];
    }
    public withDescription(description: string): TableModelAttributeVO {
        this['description'] = description;
        return this;
    }
    public withObsLocation(obsLocation: string): TableModelAttributeVO {
        this['obs_location'] = obsLocation;
        return this;
    }
    public set obsLocation(obsLocation: string  | undefined) {
        this['obs_location'] = obsLocation;
    }
    public get obsLocation(): string | undefined {
        return this['obs_location'];
    }
    public withCreateBy(createBy: string): TableModelAttributeVO {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withUpdateBy(updateBy: string): TableModelAttributeVO {
        this['update_by'] = updateBy;
        return this;
    }
    public set updateBy(updateBy: string  | undefined) {
        this['update_by'] = updateBy;
    }
    public get updateBy(): string | undefined {
        return this['update_by'];
    }
    public withDataType(dataType: string): TableModelAttributeVO {
        this['data_type'] = dataType;
        return this;
    }
    public set dataType(dataType: string  | undefined) {
        this['data_type'] = dataType;
    }
    public get dataType(): string | undefined {
        return this['data_type'];
    }
    public withDomainType(domainType: DataTypeDomainEnum): TableModelAttributeVO {
        this['domain_type'] = domainType;
        return this;
    }
    public set domainType(domainType: DataTypeDomainEnum  | undefined) {
        this['domain_type'] = domainType;
    }
    public get domainType(): DataTypeDomainEnum | undefined {
        return this['domain_type'];
    }
    public withDataTypeExtend(dataTypeExtend: string): TableModelAttributeVO {
        this['data_type_extend'] = dataTypeExtend;
        return this;
    }
    public set dataTypeExtend(dataTypeExtend: string  | undefined) {
        this['data_type_extend'] = dataTypeExtend;
    }
    public get dataTypeExtend(): string | undefined {
        return this['data_type_extend'];
    }
    public withIsPrimaryKey(isPrimaryKey: boolean): TableModelAttributeVO {
        this['is_primary_key'] = isPrimaryKey;
        return this;
    }
    public set isPrimaryKey(isPrimaryKey: boolean  | undefined) {
        this['is_primary_key'] = isPrimaryKey;
    }
    public get isPrimaryKey(): boolean | undefined {
        return this['is_primary_key'];
    }
    public withIsPartitionKey(isPartitionKey: boolean): TableModelAttributeVO {
        this['is_partition_key'] = isPartitionKey;
        return this;
    }
    public set isPartitionKey(isPartitionKey: boolean  | undefined) {
        this['is_partition_key'] = isPartitionKey;
    }
    public get isPartitionKey(): boolean | undefined {
        return this['is_partition_key'];
    }
    public withIsForeignKey(isForeignKey: boolean): TableModelAttributeVO {
        this['is_foreign_key'] = isForeignKey;
        return this;
    }
    public set isForeignKey(isForeignKey: boolean  | undefined) {
        this['is_foreign_key'] = isForeignKey;
    }
    public get isForeignKey(): boolean | undefined {
        return this['is_foreign_key'];
    }
    public withExtendField(extendField: boolean): TableModelAttributeVO {
        this['extend_field'] = extendField;
        return this;
    }
    public set extendField(extendField: boolean  | undefined) {
        this['extend_field'] = extendField;
    }
    public get extendField(): boolean | undefined {
        return this['extend_field'];
    }
    public withNotNull(notNull: boolean): TableModelAttributeVO {
        this['not_null'] = notNull;
        return this;
    }
    public set notNull(notNull: boolean  | undefined) {
        this['not_null'] = notNull;
    }
    public get notNull(): boolean | undefined {
        return this['not_null'];
    }
    public withOrdinal(ordinal: number): TableModelAttributeVO {
        this['ordinal'] = ordinal;
        return this;
    }
    public withTableModelId(tableModelId: number): TableModelAttributeVO {
        this['table_model_id'] = tableModelId;
        return this;
    }
    public set tableModelId(tableModelId: number  | undefined) {
        this['table_model_id'] = tableModelId;
    }
    public get tableModelId(): number | undefined {
        return this['table_model_id'];
    }
    public withCreateTime(createTime: Date): TableModelAttributeVO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): TableModelAttributeVO {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withTags(tags: Array<TagVO>): TableModelAttributeVO {
        this['tags'] = tags;
        return this;
    }
    public withStandRowId(standRowId: number): TableModelAttributeVO {
        this['stand_row_id'] = standRowId;
        return this;
    }
    public set standRowId(standRowId: number  | undefined) {
        this['stand_row_id'] = standRowId;
    }
    public get standRowId(): number | undefined {
        return this['stand_row_id'];
    }
    public withStandRowName(standRowName: string): TableModelAttributeVO {
        this['stand_row_name'] = standRowName;
        return this;
    }
    public set standRowName(standRowName: string  | undefined) {
        this['stand_row_name'] = standRowName;
    }
    public get standRowName(): string | undefined {
        return this['stand_row_name'];
    }
    public withQualityInfos(qualityInfos: Array<QualityInfoVO>): TableModelAttributeVO {
        this['quality_infos'] = qualityInfos;
        return this;
    }
    public set qualityInfos(qualityInfos: Array<QualityInfoVO>  | undefined) {
        this['quality_infos'] = qualityInfos;
    }
    public get qualityInfos(): Array<QualityInfoVO> | undefined {
        return this['quality_infos'];
    }
    public withAlias(alias: string): TableModelAttributeVO {
        this['alias'] = alias;
        return this;
    }
    public withSelfDefinedFields(selfDefinedFields: Array<SelfDefinedFieldVO>): TableModelAttributeVO {
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