import { CodeTableFieldValueVO } from './CodeTableFieldValueVO';
import { DataTypeDomainEnum } from './DataTypeDomainEnum';


export class CodeTableFieldVO {
    public id?: number;
    private 'code_table_id'?: number;
    public ordinal?: number;
    private 'name_en'?: string;
    private 'name_ch'?: string;
    public description?: string;
    private 'data_type'?: string;
    private 'domain_type'?: DataTypeDomainEnum;
    private 'data_type_extend'?: string;
    private 'is_unique_key'?: boolean;
    private 'code_table_field_values'?: Array<CodeTableFieldValueVO>;
    private 'count_field_values'?: number;
    public constructor(ordinal?: number, nameEn?: string, nameCh?: string, dataType?: string) { 
        this['ordinal'] = ordinal;
        this['name_en'] = nameEn;
        this['name_ch'] = nameCh;
        this['data_type'] = dataType;
    }
    public withId(id: number): CodeTableFieldVO {
        this['id'] = id;
        return this;
    }
    public withCodeTableId(codeTableId: number): CodeTableFieldVO {
        this['code_table_id'] = codeTableId;
        return this;
    }
    public set codeTableId(codeTableId: number  | undefined) {
        this['code_table_id'] = codeTableId;
    }
    public get codeTableId(): number | undefined {
        return this['code_table_id'];
    }
    public withOrdinal(ordinal: number): CodeTableFieldVO {
        this['ordinal'] = ordinal;
        return this;
    }
    public withNameEn(nameEn: string): CodeTableFieldVO {
        this['name_en'] = nameEn;
        return this;
    }
    public set nameEn(nameEn: string  | undefined) {
        this['name_en'] = nameEn;
    }
    public get nameEn(): string | undefined {
        return this['name_en'];
    }
    public withNameCh(nameCh: string): CodeTableFieldVO {
        this['name_ch'] = nameCh;
        return this;
    }
    public set nameCh(nameCh: string  | undefined) {
        this['name_ch'] = nameCh;
    }
    public get nameCh(): string | undefined {
        return this['name_ch'];
    }
    public withDescription(description: string): CodeTableFieldVO {
        this['description'] = description;
        return this;
    }
    public withDataType(dataType: string): CodeTableFieldVO {
        this['data_type'] = dataType;
        return this;
    }
    public set dataType(dataType: string  | undefined) {
        this['data_type'] = dataType;
    }
    public get dataType(): string | undefined {
        return this['data_type'];
    }
    public withDomainType(domainType: DataTypeDomainEnum): CodeTableFieldVO {
        this['domain_type'] = domainType;
        return this;
    }
    public set domainType(domainType: DataTypeDomainEnum  | undefined) {
        this['domain_type'] = domainType;
    }
    public get domainType(): DataTypeDomainEnum | undefined {
        return this['domain_type'];
    }
    public withDataTypeExtend(dataTypeExtend: string): CodeTableFieldVO {
        this['data_type_extend'] = dataTypeExtend;
        return this;
    }
    public set dataTypeExtend(dataTypeExtend: string  | undefined) {
        this['data_type_extend'] = dataTypeExtend;
    }
    public get dataTypeExtend(): string | undefined {
        return this['data_type_extend'];
    }
    public withIsUniqueKey(isUniqueKey: boolean): CodeTableFieldVO {
        this['is_unique_key'] = isUniqueKey;
        return this;
    }
    public set isUniqueKey(isUniqueKey: boolean  | undefined) {
        this['is_unique_key'] = isUniqueKey;
    }
    public get isUniqueKey(): boolean | undefined {
        return this['is_unique_key'];
    }
    public withCodeTableFieldValues(codeTableFieldValues: Array<CodeTableFieldValueVO>): CodeTableFieldVO {
        this['code_table_field_values'] = codeTableFieldValues;
        return this;
    }
    public set codeTableFieldValues(codeTableFieldValues: Array<CodeTableFieldValueVO>  | undefined) {
        this['code_table_field_values'] = codeTableFieldValues;
    }
    public get codeTableFieldValues(): Array<CodeTableFieldValueVO> | undefined {
        return this['code_table_field_values'];
    }
    public withCountFieldValues(countFieldValues: number): CodeTableFieldVO {
        this['count_field_values'] = countFieldValues;
        return this;
    }
    public set countFieldValues(countFieldValues: number  | undefined) {
        this['count_field_values'] = countFieldValues;
    }
    public get countFieldValues(): number | undefined {
        return this['count_field_values'];
    }
}