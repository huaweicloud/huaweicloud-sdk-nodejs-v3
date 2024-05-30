import { DataTypeDomainEnum } from './DataTypeDomainEnum';
import { QualityInfoVO } from './QualityInfoVO';
import { SecrecyLevelVO } from './SecrecyLevelVO';
import { SelfDefinedFieldVO } from './SelfDefinedFieldVO';


export class DimensionLogicTableAttributeVO {
    public id?: string;
    private 'dimension_logic_table_id'?: string;
    public ordinal?: number;
    private 'dimension_attribute_id'?: string;
    private 'name_en'?: string;
    private 'name_ch'?: string;
    public description?: string;
    private 'data_type'?: string;
    private 'domain_type'?: DataTypeDomainEnum;
    private 'data_type_extend'?: string;
    private 'is_primary_key'?: boolean;
    private 'is_biz_primary'?: boolean;
    private 'is_partition_key'?: boolean;
    private 'not_null'?: boolean;
    private 'stand_row_id'?: string;
    private 'stand_row_name'?: string;
    private 'quality_infos'?: Array<QualityInfoVO>;
    public alias?: string;
    private 'self_defined_fields'?: Array<SelfDefinedFieldVO>;
    private 'secrecy_levels'?: Array<SecrecyLevelVO>;
    public constructor(ordinal?: number, dimensionAttributeId?: string) { 
        this['ordinal'] = ordinal;
        this['dimension_attribute_id'] = dimensionAttributeId;
    }
    public withId(id: string): DimensionLogicTableAttributeVO {
        this['id'] = id;
        return this;
    }
    public withDimensionLogicTableId(dimensionLogicTableId: string): DimensionLogicTableAttributeVO {
        this['dimension_logic_table_id'] = dimensionLogicTableId;
        return this;
    }
    public set dimensionLogicTableId(dimensionLogicTableId: string  | undefined) {
        this['dimension_logic_table_id'] = dimensionLogicTableId;
    }
    public get dimensionLogicTableId(): string | undefined {
        return this['dimension_logic_table_id'];
    }
    public withOrdinal(ordinal: number): DimensionLogicTableAttributeVO {
        this['ordinal'] = ordinal;
        return this;
    }
    public withDimensionAttributeId(dimensionAttributeId: string): DimensionLogicTableAttributeVO {
        this['dimension_attribute_id'] = dimensionAttributeId;
        return this;
    }
    public set dimensionAttributeId(dimensionAttributeId: string  | undefined) {
        this['dimension_attribute_id'] = dimensionAttributeId;
    }
    public get dimensionAttributeId(): string | undefined {
        return this['dimension_attribute_id'];
    }
    public withNameEn(nameEn: string): DimensionLogicTableAttributeVO {
        this['name_en'] = nameEn;
        return this;
    }
    public set nameEn(nameEn: string  | undefined) {
        this['name_en'] = nameEn;
    }
    public get nameEn(): string | undefined {
        return this['name_en'];
    }
    public withNameCh(nameCh: string): DimensionLogicTableAttributeVO {
        this['name_ch'] = nameCh;
        return this;
    }
    public set nameCh(nameCh: string  | undefined) {
        this['name_ch'] = nameCh;
    }
    public get nameCh(): string | undefined {
        return this['name_ch'];
    }
    public withDescription(description: string): DimensionLogicTableAttributeVO {
        this['description'] = description;
        return this;
    }
    public withDataType(dataType: string): DimensionLogicTableAttributeVO {
        this['data_type'] = dataType;
        return this;
    }
    public set dataType(dataType: string  | undefined) {
        this['data_type'] = dataType;
    }
    public get dataType(): string | undefined {
        return this['data_type'];
    }
    public withDomainType(domainType: DataTypeDomainEnum): DimensionLogicTableAttributeVO {
        this['domain_type'] = domainType;
        return this;
    }
    public set domainType(domainType: DataTypeDomainEnum  | undefined) {
        this['domain_type'] = domainType;
    }
    public get domainType(): DataTypeDomainEnum | undefined {
        return this['domain_type'];
    }
    public withDataTypeExtend(dataTypeExtend: string): DimensionLogicTableAttributeVO {
        this['data_type_extend'] = dataTypeExtend;
        return this;
    }
    public set dataTypeExtend(dataTypeExtend: string  | undefined) {
        this['data_type_extend'] = dataTypeExtend;
    }
    public get dataTypeExtend(): string | undefined {
        return this['data_type_extend'];
    }
    public withIsPrimaryKey(isPrimaryKey: boolean): DimensionLogicTableAttributeVO {
        this['is_primary_key'] = isPrimaryKey;
        return this;
    }
    public set isPrimaryKey(isPrimaryKey: boolean  | undefined) {
        this['is_primary_key'] = isPrimaryKey;
    }
    public get isPrimaryKey(): boolean | undefined {
        return this['is_primary_key'];
    }
    public withIsBizPrimary(isBizPrimary: boolean): DimensionLogicTableAttributeVO {
        this['is_biz_primary'] = isBizPrimary;
        return this;
    }
    public set isBizPrimary(isBizPrimary: boolean  | undefined) {
        this['is_biz_primary'] = isBizPrimary;
    }
    public get isBizPrimary(): boolean | undefined {
        return this['is_biz_primary'];
    }
    public withIsPartitionKey(isPartitionKey: boolean): DimensionLogicTableAttributeVO {
        this['is_partition_key'] = isPartitionKey;
        return this;
    }
    public set isPartitionKey(isPartitionKey: boolean  | undefined) {
        this['is_partition_key'] = isPartitionKey;
    }
    public get isPartitionKey(): boolean | undefined {
        return this['is_partition_key'];
    }
    public withNotNull(notNull: boolean): DimensionLogicTableAttributeVO {
        this['not_null'] = notNull;
        return this;
    }
    public set notNull(notNull: boolean  | undefined) {
        this['not_null'] = notNull;
    }
    public get notNull(): boolean | undefined {
        return this['not_null'];
    }
    public withStandRowId(standRowId: string): DimensionLogicTableAttributeVO {
        this['stand_row_id'] = standRowId;
        return this;
    }
    public set standRowId(standRowId: string  | undefined) {
        this['stand_row_id'] = standRowId;
    }
    public get standRowId(): string | undefined {
        return this['stand_row_id'];
    }
    public withStandRowName(standRowName: string): DimensionLogicTableAttributeVO {
        this['stand_row_name'] = standRowName;
        return this;
    }
    public set standRowName(standRowName: string  | undefined) {
        this['stand_row_name'] = standRowName;
    }
    public get standRowName(): string | undefined {
        return this['stand_row_name'];
    }
    public withQualityInfos(qualityInfos: Array<QualityInfoVO>): DimensionLogicTableAttributeVO {
        this['quality_infos'] = qualityInfos;
        return this;
    }
    public set qualityInfos(qualityInfos: Array<QualityInfoVO>  | undefined) {
        this['quality_infos'] = qualityInfos;
    }
    public get qualityInfos(): Array<QualityInfoVO> | undefined {
        return this['quality_infos'];
    }
    public withAlias(alias: string): DimensionLogicTableAttributeVO {
        this['alias'] = alias;
        return this;
    }
    public withSelfDefinedFields(selfDefinedFields: Array<SelfDefinedFieldVO>): DimensionLogicTableAttributeVO {
        this['self_defined_fields'] = selfDefinedFields;
        return this;
    }
    public set selfDefinedFields(selfDefinedFields: Array<SelfDefinedFieldVO>  | undefined) {
        this['self_defined_fields'] = selfDefinedFields;
    }
    public get selfDefinedFields(): Array<SelfDefinedFieldVO> | undefined {
        return this['self_defined_fields'];
    }
    public withSecrecyLevels(secrecyLevels: Array<SecrecyLevelVO>): DimensionLogicTableAttributeVO {
        this['secrecy_levels'] = secrecyLevels;
        return this;
    }
    public set secrecyLevels(secrecyLevels: Array<SecrecyLevelVO>  | undefined) {
        this['secrecy_levels'] = secrecyLevels;
    }
    public get secrecyLevels(): Array<SecrecyLevelVO> | undefined {
        return this['secrecy_levels'];
    }
}