import { DataClassification } from './DataClassification';
import { IsapTableSchema } from './IsapTableSchema';
import { TableDisplaySetting } from './TableDisplaySetting';
import { TableStorageSetting } from './TableStorageSetting';


export class CreateTableRequestBody {
    private 'table_name'?: string;
    private 'table_alias'?: string;
    private 'table_alias_en'?: string;
    private 'table_alias_fr'?: string;
    public category?: CreateTableRequestBodyCategoryEnum | string;
    public format?: CreateTableRequestBodyFormatEnum | string;
    public description?: string;
    private 'description_en'?: string;
    private 'description_fr'?: string;
    public directory?: string;
    private 'directory_en'?: string;
    private 'directory_fr'?: string;
    private 'data_classification'?: DataClassification;
    public schema?: IsapTableSchema;
    private 'storage_setting'?: TableStorageSetting;
    private 'display_setting'?: TableDisplaySetting;
    private 'create_policy'?: CreateTableRequestBodyCreatePolicyEnum | string;
    public constructor(tableName?: string, tableAlias?: string, category?: string, format?: string, schema?: IsapTableSchema, storageSetting?: TableStorageSetting, displaySetting?: TableDisplaySetting) { 
        this['table_name'] = tableName;
        this['table_alias'] = tableAlias;
        this['category'] = category;
        this['format'] = format;
        this['schema'] = schema;
        this['storage_setting'] = storageSetting;
        this['display_setting'] = displaySetting;
    }
    public withTableName(tableName: string): CreateTableRequestBody {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withTableAlias(tableAlias: string): CreateTableRequestBody {
        this['table_alias'] = tableAlias;
        return this;
    }
    public set tableAlias(tableAlias: string  | undefined) {
        this['table_alias'] = tableAlias;
    }
    public get tableAlias(): string | undefined {
        return this['table_alias'];
    }
    public withTableAliasEn(tableAliasEn: string): CreateTableRequestBody {
        this['table_alias_en'] = tableAliasEn;
        return this;
    }
    public set tableAliasEn(tableAliasEn: string  | undefined) {
        this['table_alias_en'] = tableAliasEn;
    }
    public get tableAliasEn(): string | undefined {
        return this['table_alias_en'];
    }
    public withTableAliasFr(tableAliasFr: string): CreateTableRequestBody {
        this['table_alias_fr'] = tableAliasFr;
        return this;
    }
    public set tableAliasFr(tableAliasFr: string  | undefined) {
        this['table_alias_fr'] = tableAliasFr;
    }
    public get tableAliasFr(): string | undefined {
        return this['table_alias_fr'];
    }
    public withCategory(category: CreateTableRequestBodyCategoryEnum | string): CreateTableRequestBody {
        this['category'] = category;
        return this;
    }
    public withFormat(format: CreateTableRequestBodyFormatEnum | string): CreateTableRequestBody {
        this['format'] = format;
        return this;
    }
    public withDescription(description: string): CreateTableRequestBody {
        this['description'] = description;
        return this;
    }
    public withDescriptionEn(descriptionEn: string): CreateTableRequestBody {
        this['description_en'] = descriptionEn;
        return this;
    }
    public set descriptionEn(descriptionEn: string  | undefined) {
        this['description_en'] = descriptionEn;
    }
    public get descriptionEn(): string | undefined {
        return this['description_en'];
    }
    public withDescriptionFr(descriptionFr: string): CreateTableRequestBody {
        this['description_fr'] = descriptionFr;
        return this;
    }
    public set descriptionFr(descriptionFr: string  | undefined) {
        this['description_fr'] = descriptionFr;
    }
    public get descriptionFr(): string | undefined {
        return this['description_fr'];
    }
    public withDirectory(directory: string): CreateTableRequestBody {
        this['directory'] = directory;
        return this;
    }
    public withDirectoryEn(directoryEn: string): CreateTableRequestBody {
        this['directory_en'] = directoryEn;
        return this;
    }
    public set directoryEn(directoryEn: string  | undefined) {
        this['directory_en'] = directoryEn;
    }
    public get directoryEn(): string | undefined {
        return this['directory_en'];
    }
    public withDirectoryFr(directoryFr: string): CreateTableRequestBody {
        this['directory_fr'] = directoryFr;
        return this;
    }
    public set directoryFr(directoryFr: string  | undefined) {
        this['directory_fr'] = directoryFr;
    }
    public get directoryFr(): string | undefined {
        return this['directory_fr'];
    }
    public withDataClassification(dataClassification: DataClassification): CreateTableRequestBody {
        this['data_classification'] = dataClassification;
        return this;
    }
    public set dataClassification(dataClassification: DataClassification  | undefined) {
        this['data_classification'] = dataClassification;
    }
    public get dataClassification(): DataClassification | undefined {
        return this['data_classification'];
    }
    public withSchema(schema: IsapTableSchema): CreateTableRequestBody {
        this['schema'] = schema;
        return this;
    }
    public withStorageSetting(storageSetting: TableStorageSetting): CreateTableRequestBody {
        this['storage_setting'] = storageSetting;
        return this;
    }
    public set storageSetting(storageSetting: TableStorageSetting  | undefined) {
        this['storage_setting'] = storageSetting;
    }
    public get storageSetting(): TableStorageSetting | undefined {
        return this['storage_setting'];
    }
    public withDisplaySetting(displaySetting: TableDisplaySetting): CreateTableRequestBody {
        this['display_setting'] = displaySetting;
        return this;
    }
    public set displaySetting(displaySetting: TableDisplaySetting  | undefined) {
        this['display_setting'] = displaySetting;
    }
    public get displaySetting(): TableDisplaySetting | undefined {
        return this['display_setting'];
    }
    public withCreatePolicy(createPolicy: CreateTableRequestBodyCreatePolicyEnum | string): CreateTableRequestBody {
        this['create_policy'] = createPolicy;
        return this;
    }
    public set createPolicy(createPolicy: CreateTableRequestBodyCreatePolicyEnum | string  | undefined) {
        this['create_policy'] = createPolicy;
    }
    public get createPolicy(): CreateTableRequestBodyCreatePolicyEnum | string | undefined {
        return this['create_policy'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateTableRequestBodyCategoryEnum {
    STREAMING = 'STREAMING',
    INDEX = 'INDEX',
    APPLICATION = 'APPLICATION',
    TENANT_BUCKET = 'TENANT_BUCKET',
    LAKE = 'LAKE'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateTableRequestBodyFormatEnum {
    JSON = 'JSON',
    DEBEZIUM_JSON = 'DEBEZIUM_JSON',
    CSV = 'CSV',
    PARQUET = 'PARQUET',
    ORC = 'ORC'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateTableRequestBodyCreatePolicyEnum {
    SYS_INIT_INDEX_APP_TBL = 'SYS_INIT_INDEX_APP_TBL',
    DEFAULT = 'DEFAULT'
}
