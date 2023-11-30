import { BizStatusEnum } from './BizStatusEnum';
import { DataTypeDomainEnum } from './DataTypeDomainEnum';
import { QualityInfoVO } from './QualityInfoVO';
import { SelfDefinedFieldVO } from './SelfDefinedFieldVO';


export class DimensionAttributeVO {
    public id?: number;
    private 'dimension_id'?: number;
    private 'code_table_field_id'?: number;
    private 'name_en'?: string;
    private 'name_ch'?: string;
    public description?: string;
    private 'create_by'?: string;
    private 'data_type'?: string;
    private 'domain_type'?: DataTypeDomainEnum;
    private 'data_type_extend'?: string;
    private 'is_primary_key'?: boolean;
    private 'is_biz_primary'?: boolean;
    private 'is_partition_key'?: boolean;
    public ordinal?: number;
    private 'not_null'?: boolean;
    private 'stand_row_id'?: number;
    private 'stand_row_name'?: string;
    private 'quality_infos'?: Array<QualityInfoVO>;
    public status?: BizStatusEnum;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    public alias?: string;
    private 'self_defined_fields'?: Array<SelfDefinedFieldVO>;
    public constructor(nameEn?: string, nameCh?: string, dataType?: string, isPrimaryKey?: boolean, ordinal?: number) { 
        this['name_en'] = nameEn;
        this['name_ch'] = nameCh;
        this['data_type'] = dataType;
        this['is_primary_key'] = isPrimaryKey;
        this['ordinal'] = ordinal;
    }
    public withId(id: number): DimensionAttributeVO {
        this['id'] = id;
        return this;
    }
    public withDimensionId(dimensionId: number): DimensionAttributeVO {
        this['dimension_id'] = dimensionId;
        return this;
    }
    public set dimensionId(dimensionId: number  | undefined) {
        this['dimension_id'] = dimensionId;
    }
    public get dimensionId(): number | undefined {
        return this['dimension_id'];
    }
    public withCodeTableFieldId(codeTableFieldId: number): DimensionAttributeVO {
        this['code_table_field_id'] = codeTableFieldId;
        return this;
    }
    public set codeTableFieldId(codeTableFieldId: number  | undefined) {
        this['code_table_field_id'] = codeTableFieldId;
    }
    public get codeTableFieldId(): number | undefined {
        return this['code_table_field_id'];
    }
    public withNameEn(nameEn: string): DimensionAttributeVO {
        this['name_en'] = nameEn;
        return this;
    }
    public set nameEn(nameEn: string  | undefined) {
        this['name_en'] = nameEn;
    }
    public get nameEn(): string | undefined {
        return this['name_en'];
    }
    public withNameCh(nameCh: string): DimensionAttributeVO {
        this['name_ch'] = nameCh;
        return this;
    }
    public set nameCh(nameCh: string  | undefined) {
        this['name_ch'] = nameCh;
    }
    public get nameCh(): string | undefined {
        return this['name_ch'];
    }
    public withDescription(description: string): DimensionAttributeVO {
        this['description'] = description;
        return this;
    }
    public withCreateBy(createBy: string): DimensionAttributeVO {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withDataType(dataType: string): DimensionAttributeVO {
        this['data_type'] = dataType;
        return this;
    }
    public set dataType(dataType: string  | undefined) {
        this['data_type'] = dataType;
    }
    public get dataType(): string | undefined {
        return this['data_type'];
    }
    public withDomainType(domainType: DataTypeDomainEnum): DimensionAttributeVO {
        this['domain_type'] = domainType;
        return this;
    }
    public set domainType(domainType: DataTypeDomainEnum  | undefined) {
        this['domain_type'] = domainType;
    }
    public get domainType(): DataTypeDomainEnum | undefined {
        return this['domain_type'];
    }
    public withDataTypeExtend(dataTypeExtend: string): DimensionAttributeVO {
        this['data_type_extend'] = dataTypeExtend;
        return this;
    }
    public set dataTypeExtend(dataTypeExtend: string  | undefined) {
        this['data_type_extend'] = dataTypeExtend;
    }
    public get dataTypeExtend(): string | undefined {
        return this['data_type_extend'];
    }
    public withIsPrimaryKey(isPrimaryKey: boolean): DimensionAttributeVO {
        this['is_primary_key'] = isPrimaryKey;
        return this;
    }
    public set isPrimaryKey(isPrimaryKey: boolean  | undefined) {
        this['is_primary_key'] = isPrimaryKey;
    }
    public get isPrimaryKey(): boolean | undefined {
        return this['is_primary_key'];
    }
    public withIsBizPrimary(isBizPrimary: boolean): DimensionAttributeVO {
        this['is_biz_primary'] = isBizPrimary;
        return this;
    }
    public set isBizPrimary(isBizPrimary: boolean  | undefined) {
        this['is_biz_primary'] = isBizPrimary;
    }
    public get isBizPrimary(): boolean | undefined {
        return this['is_biz_primary'];
    }
    public withIsPartitionKey(isPartitionKey: boolean): DimensionAttributeVO {
        this['is_partition_key'] = isPartitionKey;
        return this;
    }
    public set isPartitionKey(isPartitionKey: boolean  | undefined) {
        this['is_partition_key'] = isPartitionKey;
    }
    public get isPartitionKey(): boolean | undefined {
        return this['is_partition_key'];
    }
    public withOrdinal(ordinal: number): DimensionAttributeVO {
        this['ordinal'] = ordinal;
        return this;
    }
    public withNotNull(notNull: boolean): DimensionAttributeVO {
        this['not_null'] = notNull;
        return this;
    }
    public set notNull(notNull: boolean  | undefined) {
        this['not_null'] = notNull;
    }
    public get notNull(): boolean | undefined {
        return this['not_null'];
    }
    public withStandRowId(standRowId: number): DimensionAttributeVO {
        this['stand_row_id'] = standRowId;
        return this;
    }
    public set standRowId(standRowId: number  | undefined) {
        this['stand_row_id'] = standRowId;
    }
    public get standRowId(): number | undefined {
        return this['stand_row_id'];
    }
    public withStandRowName(standRowName: string): DimensionAttributeVO {
        this['stand_row_name'] = standRowName;
        return this;
    }
    public set standRowName(standRowName: string  | undefined) {
        this['stand_row_name'] = standRowName;
    }
    public get standRowName(): string | undefined {
        return this['stand_row_name'];
    }
    public withQualityInfos(qualityInfos: Array<QualityInfoVO>): DimensionAttributeVO {
        this['quality_infos'] = qualityInfos;
        return this;
    }
    public set qualityInfos(qualityInfos: Array<QualityInfoVO>  | undefined) {
        this['quality_infos'] = qualityInfos;
    }
    public get qualityInfos(): Array<QualityInfoVO> | undefined {
        return this['quality_infos'];
    }
    public withStatus(status: BizStatusEnum): DimensionAttributeVO {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: Date): DimensionAttributeVO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): DimensionAttributeVO {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withAlias(alias: string): DimensionAttributeVO {
        this['alias'] = alias;
        return this;
    }
    public withSelfDefinedFields(selfDefinedFields: Array<SelfDefinedFieldVO>): DimensionAttributeVO {
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