import { BizTypeEnum } from './BizTypeEnum';
import { DataTypeDomainEnum } from './DataTypeDomainEnum';
import { DimensionVO } from './DimensionVO';
import { QualityInfoVO } from './QualityInfoVO';
import { SecrecyLevelRecordVO } from './SecrecyLevelRecordVO';
import { SelfDefinedFieldVO } from './SelfDefinedFieldVO';


export class FactTableAttributeVO {
    public id?: string;
    private 'fact_logic_table_id'?: string;
    public ordinal?: number;
    private 'dimension_id'?: string;
    public role?: string;
    public dimension?: DimensionVO;
    private 'is_primary_key'?: boolean;
    private 'is_partition_key'?: boolean;
    private 'is_foreign_key'?: boolean;
    private 'secrecy_levels'?: Array<SecrecyLevelRecordVO>;
    public description?: string;
    private 'data_type'?: string;
    private 'domain_type'?: DataTypeDomainEnum;
    private 'data_type_extend'?: string;
    private 'name_en'?: string;
    private 'name_ch'?: string;
    private 'not_null'?: boolean;
    private 'attribute_type'?: BizTypeEnum;
    private 'stand_row_id'?: string;
    private 'stand_row_name'?: string;
    private 'quality_infos'?: Array<QualityInfoVO>;
    public alias?: string;
    private 'self_defined_fields'?: Array<SelfDefinedFieldVO>;
    public constructor(ordinal?: number, isPrimaryKey?: boolean, isPartitionKey?: boolean, dataType?: string, nameEn?: string, nameCh?: string) { 
        this['ordinal'] = ordinal;
        this['is_primary_key'] = isPrimaryKey;
        this['is_partition_key'] = isPartitionKey;
        this['data_type'] = dataType;
        this['name_en'] = nameEn;
        this['name_ch'] = nameCh;
    }
    public withId(id: string): FactTableAttributeVO {
        this['id'] = id;
        return this;
    }
    public withFactLogicTableId(factLogicTableId: string): FactTableAttributeVO {
        this['fact_logic_table_id'] = factLogicTableId;
        return this;
    }
    public set factLogicTableId(factLogicTableId: string  | undefined) {
        this['fact_logic_table_id'] = factLogicTableId;
    }
    public get factLogicTableId(): string | undefined {
        return this['fact_logic_table_id'];
    }
    public withOrdinal(ordinal: number): FactTableAttributeVO {
        this['ordinal'] = ordinal;
        return this;
    }
    public withDimensionId(dimensionId: string): FactTableAttributeVO {
        this['dimension_id'] = dimensionId;
        return this;
    }
    public set dimensionId(dimensionId: string  | undefined) {
        this['dimension_id'] = dimensionId;
    }
    public get dimensionId(): string | undefined {
        return this['dimension_id'];
    }
    public withRole(role: string): FactTableAttributeVO {
        this['role'] = role;
        return this;
    }
    public withDimension(dimension: DimensionVO): FactTableAttributeVO {
        this['dimension'] = dimension;
        return this;
    }
    public withIsPrimaryKey(isPrimaryKey: boolean): FactTableAttributeVO {
        this['is_primary_key'] = isPrimaryKey;
        return this;
    }
    public set isPrimaryKey(isPrimaryKey: boolean  | undefined) {
        this['is_primary_key'] = isPrimaryKey;
    }
    public get isPrimaryKey(): boolean | undefined {
        return this['is_primary_key'];
    }
    public withIsPartitionKey(isPartitionKey: boolean): FactTableAttributeVO {
        this['is_partition_key'] = isPartitionKey;
        return this;
    }
    public set isPartitionKey(isPartitionKey: boolean  | undefined) {
        this['is_partition_key'] = isPartitionKey;
    }
    public get isPartitionKey(): boolean | undefined {
        return this['is_partition_key'];
    }
    public withIsForeignKey(isForeignKey: boolean): FactTableAttributeVO {
        this['is_foreign_key'] = isForeignKey;
        return this;
    }
    public set isForeignKey(isForeignKey: boolean  | undefined) {
        this['is_foreign_key'] = isForeignKey;
    }
    public get isForeignKey(): boolean | undefined {
        return this['is_foreign_key'];
    }
    public withSecrecyLevels(secrecyLevels: Array<SecrecyLevelRecordVO>): FactTableAttributeVO {
        this['secrecy_levels'] = secrecyLevels;
        return this;
    }
    public set secrecyLevels(secrecyLevels: Array<SecrecyLevelRecordVO>  | undefined) {
        this['secrecy_levels'] = secrecyLevels;
    }
    public get secrecyLevels(): Array<SecrecyLevelRecordVO> | undefined {
        return this['secrecy_levels'];
    }
    public withDescription(description: string): FactTableAttributeVO {
        this['description'] = description;
        return this;
    }
    public withDataType(dataType: string): FactTableAttributeVO {
        this['data_type'] = dataType;
        return this;
    }
    public set dataType(dataType: string  | undefined) {
        this['data_type'] = dataType;
    }
    public get dataType(): string | undefined {
        return this['data_type'];
    }
    public withDomainType(domainType: DataTypeDomainEnum): FactTableAttributeVO {
        this['domain_type'] = domainType;
        return this;
    }
    public set domainType(domainType: DataTypeDomainEnum  | undefined) {
        this['domain_type'] = domainType;
    }
    public get domainType(): DataTypeDomainEnum | undefined {
        return this['domain_type'];
    }
    public withDataTypeExtend(dataTypeExtend: string): FactTableAttributeVO {
        this['data_type_extend'] = dataTypeExtend;
        return this;
    }
    public set dataTypeExtend(dataTypeExtend: string  | undefined) {
        this['data_type_extend'] = dataTypeExtend;
    }
    public get dataTypeExtend(): string | undefined {
        return this['data_type_extend'];
    }
    public withNameEn(nameEn: string): FactTableAttributeVO {
        this['name_en'] = nameEn;
        return this;
    }
    public set nameEn(nameEn: string  | undefined) {
        this['name_en'] = nameEn;
    }
    public get nameEn(): string | undefined {
        return this['name_en'];
    }
    public withNameCh(nameCh: string): FactTableAttributeVO {
        this['name_ch'] = nameCh;
        return this;
    }
    public set nameCh(nameCh: string  | undefined) {
        this['name_ch'] = nameCh;
    }
    public get nameCh(): string | undefined {
        return this['name_ch'];
    }
    public withNotNull(notNull: boolean): FactTableAttributeVO {
        this['not_null'] = notNull;
        return this;
    }
    public set notNull(notNull: boolean  | undefined) {
        this['not_null'] = notNull;
    }
    public get notNull(): boolean | undefined {
        return this['not_null'];
    }
    public withAttributeType(attributeType: BizTypeEnum): FactTableAttributeVO {
        this['attribute_type'] = attributeType;
        return this;
    }
    public set attributeType(attributeType: BizTypeEnum  | undefined) {
        this['attribute_type'] = attributeType;
    }
    public get attributeType(): BizTypeEnum | undefined {
        return this['attribute_type'];
    }
    public withStandRowId(standRowId: string): FactTableAttributeVO {
        this['stand_row_id'] = standRowId;
        return this;
    }
    public set standRowId(standRowId: string  | undefined) {
        this['stand_row_id'] = standRowId;
    }
    public get standRowId(): string | undefined {
        return this['stand_row_id'];
    }
    public withStandRowName(standRowName: string): FactTableAttributeVO {
        this['stand_row_name'] = standRowName;
        return this;
    }
    public set standRowName(standRowName: string  | undefined) {
        this['stand_row_name'] = standRowName;
    }
    public get standRowName(): string | undefined {
        return this['stand_row_name'];
    }
    public withQualityInfos(qualityInfos: Array<QualityInfoVO>): FactTableAttributeVO {
        this['quality_infos'] = qualityInfos;
        return this;
    }
    public set qualityInfos(qualityInfos: Array<QualityInfoVO>  | undefined) {
        this['quality_infos'] = qualityInfos;
    }
    public get qualityInfos(): Array<QualityInfoVO> | undefined {
        return this['quality_infos'];
    }
    public withAlias(alias: string): FactTableAttributeVO {
        this['alias'] = alias;
        return this;
    }
    public withSelfDefinedFields(selfDefinedFields: Array<SelfDefinedFieldVO>): FactTableAttributeVO {
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