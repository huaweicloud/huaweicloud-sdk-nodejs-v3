import { BizTypeEnum } from './BizTypeEnum';
import { DataTypeDomainEnum } from './DataTypeDomainEnum';
import { QualityInfoVO } from './QualityInfoVO';


export class AggregationLogicTableAttributeVO {
    public id?: string;
    private 'aggregation_logic_table_id'?: string;
    public ordinal?: number;
    private 'name_en'?: string;
    private 'name_ch'?: string;
    private 'attribute_type'?: BizTypeEnum;
    private 'is_primary_key'?: boolean;
    private 'is_partition_key'?: boolean;
    private 'not_null'?: boolean;
    public description?: string;
    private 'data_type'?: string;
    private 'domain_type'?: DataTypeDomainEnum;
    private 'data_type_extend'?: string;
    private 'ref_id'?: string;
    private 'stand_row_id'?: string;
    private 'stand_row_name'?: string;
    private 'quality_infos'?: Array<QualityInfoVO>;
    public alias?: string;
    public constructor(nameEn?: string, nameCh?: string, isPrimaryKey?: boolean, isPartitionKey?: boolean, dataType?: string) { 
        this['name_en'] = nameEn;
        this['name_ch'] = nameCh;
        this['is_primary_key'] = isPrimaryKey;
        this['is_partition_key'] = isPartitionKey;
        this['data_type'] = dataType;
    }
    public withId(id: string): AggregationLogicTableAttributeVO {
        this['id'] = id;
        return this;
    }
    public withAggregationLogicTableId(aggregationLogicTableId: string): AggregationLogicTableAttributeVO {
        this['aggregation_logic_table_id'] = aggregationLogicTableId;
        return this;
    }
    public set aggregationLogicTableId(aggregationLogicTableId: string  | undefined) {
        this['aggregation_logic_table_id'] = aggregationLogicTableId;
    }
    public get aggregationLogicTableId(): string | undefined {
        return this['aggregation_logic_table_id'];
    }
    public withOrdinal(ordinal: number): AggregationLogicTableAttributeVO {
        this['ordinal'] = ordinal;
        return this;
    }
    public withNameEn(nameEn: string): AggregationLogicTableAttributeVO {
        this['name_en'] = nameEn;
        return this;
    }
    public set nameEn(nameEn: string  | undefined) {
        this['name_en'] = nameEn;
    }
    public get nameEn(): string | undefined {
        return this['name_en'];
    }
    public withNameCh(nameCh: string): AggregationLogicTableAttributeVO {
        this['name_ch'] = nameCh;
        return this;
    }
    public set nameCh(nameCh: string  | undefined) {
        this['name_ch'] = nameCh;
    }
    public get nameCh(): string | undefined {
        return this['name_ch'];
    }
    public withAttributeType(attributeType: BizTypeEnum): AggregationLogicTableAttributeVO {
        this['attribute_type'] = attributeType;
        return this;
    }
    public set attributeType(attributeType: BizTypeEnum  | undefined) {
        this['attribute_type'] = attributeType;
    }
    public get attributeType(): BizTypeEnum | undefined {
        return this['attribute_type'];
    }
    public withIsPrimaryKey(isPrimaryKey: boolean): AggregationLogicTableAttributeVO {
        this['is_primary_key'] = isPrimaryKey;
        return this;
    }
    public set isPrimaryKey(isPrimaryKey: boolean  | undefined) {
        this['is_primary_key'] = isPrimaryKey;
    }
    public get isPrimaryKey(): boolean | undefined {
        return this['is_primary_key'];
    }
    public withIsPartitionKey(isPartitionKey: boolean): AggregationLogicTableAttributeVO {
        this['is_partition_key'] = isPartitionKey;
        return this;
    }
    public set isPartitionKey(isPartitionKey: boolean  | undefined) {
        this['is_partition_key'] = isPartitionKey;
    }
    public get isPartitionKey(): boolean | undefined {
        return this['is_partition_key'];
    }
    public withNotNull(notNull: boolean): AggregationLogicTableAttributeVO {
        this['not_null'] = notNull;
        return this;
    }
    public set notNull(notNull: boolean  | undefined) {
        this['not_null'] = notNull;
    }
    public get notNull(): boolean | undefined {
        return this['not_null'];
    }
    public withDescription(description: string): AggregationLogicTableAttributeVO {
        this['description'] = description;
        return this;
    }
    public withDataType(dataType: string): AggregationLogicTableAttributeVO {
        this['data_type'] = dataType;
        return this;
    }
    public set dataType(dataType: string  | undefined) {
        this['data_type'] = dataType;
    }
    public get dataType(): string | undefined {
        return this['data_type'];
    }
    public withDomainType(domainType: DataTypeDomainEnum): AggregationLogicTableAttributeVO {
        this['domain_type'] = domainType;
        return this;
    }
    public set domainType(domainType: DataTypeDomainEnum  | undefined) {
        this['domain_type'] = domainType;
    }
    public get domainType(): DataTypeDomainEnum | undefined {
        return this['domain_type'];
    }
    public withDataTypeExtend(dataTypeExtend: string): AggregationLogicTableAttributeVO {
        this['data_type_extend'] = dataTypeExtend;
        return this;
    }
    public set dataTypeExtend(dataTypeExtend: string  | undefined) {
        this['data_type_extend'] = dataTypeExtend;
    }
    public get dataTypeExtend(): string | undefined {
        return this['data_type_extend'];
    }
    public withRefId(refId: string): AggregationLogicTableAttributeVO {
        this['ref_id'] = refId;
        return this;
    }
    public set refId(refId: string  | undefined) {
        this['ref_id'] = refId;
    }
    public get refId(): string | undefined {
        return this['ref_id'];
    }
    public withStandRowId(standRowId: string): AggregationLogicTableAttributeVO {
        this['stand_row_id'] = standRowId;
        return this;
    }
    public set standRowId(standRowId: string  | undefined) {
        this['stand_row_id'] = standRowId;
    }
    public get standRowId(): string | undefined {
        return this['stand_row_id'];
    }
    public withStandRowName(standRowName: string): AggregationLogicTableAttributeVO {
        this['stand_row_name'] = standRowName;
        return this;
    }
    public set standRowName(standRowName: string  | undefined) {
        this['stand_row_name'] = standRowName;
    }
    public get standRowName(): string | undefined {
        return this['stand_row_name'];
    }
    public withQualityInfos(qualityInfos: Array<QualityInfoVO>): AggregationLogicTableAttributeVO {
        this['quality_infos'] = qualityInfos;
        return this;
    }
    public set qualityInfos(qualityInfos: Array<QualityInfoVO>  | undefined) {
        this['quality_infos'] = qualityInfos;
    }
    public get qualityInfos(): Array<QualityInfoVO> | undefined {
        return this['quality_infos'];
    }
    public withAlias(alias: string): AggregationLogicTableAttributeVO {
        this['alias'] = alias;
        return this;
    }
}