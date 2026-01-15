
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSupportObjectTypeResponse extends SdkResponse {
    private 'is_full_trans_support_object'?: boolean;
    private 'is_incre_trans_support_object'?: boolean;
    private 'is_full_incre_trans_support_object'?: boolean;
    private 'support_object_import_engine'?: Array<string>;
    private 'is_support_column_mapping'?: boolean;
    private 'is_database_support_search'?: boolean;
    private 'is_schema_support_search'?: boolean;
    private 'is_table_support_search'?: boolean;
    private 'file_size'?: string;
    private 'previous_select'?: string;
    private 'import_level'?: string;
    private 'is_import_cloumn'?: boolean;
    private 'import_mapping_type'?: string;
    private 'is_import_unique_key'?: boolean;
    public constructor() { 
        super();
    }
    public withIsFullTransSupportObject(isFullTransSupportObject: boolean): ShowSupportObjectTypeResponse {
        this['is_full_trans_support_object'] = isFullTransSupportObject;
        return this;
    }
    public set isFullTransSupportObject(isFullTransSupportObject: boolean  | undefined) {
        this['is_full_trans_support_object'] = isFullTransSupportObject;
    }
    public get isFullTransSupportObject(): boolean | undefined {
        return this['is_full_trans_support_object'];
    }
    public withIsIncreTransSupportObject(isIncreTransSupportObject: boolean): ShowSupportObjectTypeResponse {
        this['is_incre_trans_support_object'] = isIncreTransSupportObject;
        return this;
    }
    public set isIncreTransSupportObject(isIncreTransSupportObject: boolean  | undefined) {
        this['is_incre_trans_support_object'] = isIncreTransSupportObject;
    }
    public get isIncreTransSupportObject(): boolean | undefined {
        return this['is_incre_trans_support_object'];
    }
    public withIsFullIncreTransSupportObject(isFullIncreTransSupportObject: boolean): ShowSupportObjectTypeResponse {
        this['is_full_incre_trans_support_object'] = isFullIncreTransSupportObject;
        return this;
    }
    public set isFullIncreTransSupportObject(isFullIncreTransSupportObject: boolean  | undefined) {
        this['is_full_incre_trans_support_object'] = isFullIncreTransSupportObject;
    }
    public get isFullIncreTransSupportObject(): boolean | undefined {
        return this['is_full_incre_trans_support_object'];
    }
    public withSupportObjectImportEngine(supportObjectImportEngine: Array<string>): ShowSupportObjectTypeResponse {
        this['support_object_import_engine'] = supportObjectImportEngine;
        return this;
    }
    public set supportObjectImportEngine(supportObjectImportEngine: Array<string>  | undefined) {
        this['support_object_import_engine'] = supportObjectImportEngine;
    }
    public get supportObjectImportEngine(): Array<string> | undefined {
        return this['support_object_import_engine'];
    }
    public withIsSupportColumnMapping(isSupportColumnMapping: boolean): ShowSupportObjectTypeResponse {
        this['is_support_column_mapping'] = isSupportColumnMapping;
        return this;
    }
    public set isSupportColumnMapping(isSupportColumnMapping: boolean  | undefined) {
        this['is_support_column_mapping'] = isSupportColumnMapping;
    }
    public get isSupportColumnMapping(): boolean | undefined {
        return this['is_support_column_mapping'];
    }
    public withIsDatabaseSupportSearch(isDatabaseSupportSearch: boolean): ShowSupportObjectTypeResponse {
        this['is_database_support_search'] = isDatabaseSupportSearch;
        return this;
    }
    public set isDatabaseSupportSearch(isDatabaseSupportSearch: boolean  | undefined) {
        this['is_database_support_search'] = isDatabaseSupportSearch;
    }
    public get isDatabaseSupportSearch(): boolean | undefined {
        return this['is_database_support_search'];
    }
    public withIsSchemaSupportSearch(isSchemaSupportSearch: boolean): ShowSupportObjectTypeResponse {
        this['is_schema_support_search'] = isSchemaSupportSearch;
        return this;
    }
    public set isSchemaSupportSearch(isSchemaSupportSearch: boolean  | undefined) {
        this['is_schema_support_search'] = isSchemaSupportSearch;
    }
    public get isSchemaSupportSearch(): boolean | undefined {
        return this['is_schema_support_search'];
    }
    public withIsTableSupportSearch(isTableSupportSearch: boolean): ShowSupportObjectTypeResponse {
        this['is_table_support_search'] = isTableSupportSearch;
        return this;
    }
    public set isTableSupportSearch(isTableSupportSearch: boolean  | undefined) {
        this['is_table_support_search'] = isTableSupportSearch;
    }
    public get isTableSupportSearch(): boolean | undefined {
        return this['is_table_support_search'];
    }
    public withFileSize(fileSize: string): ShowSupportObjectTypeResponse {
        this['file_size'] = fileSize;
        return this;
    }
    public set fileSize(fileSize: string  | undefined) {
        this['file_size'] = fileSize;
    }
    public get fileSize(): string | undefined {
        return this['file_size'];
    }
    public withPreviousSelect(previousSelect: string): ShowSupportObjectTypeResponse {
        this['previous_select'] = previousSelect;
        return this;
    }
    public set previousSelect(previousSelect: string  | undefined) {
        this['previous_select'] = previousSelect;
    }
    public get previousSelect(): string | undefined {
        return this['previous_select'];
    }
    public withImportLevel(importLevel: string): ShowSupportObjectTypeResponse {
        this['import_level'] = importLevel;
        return this;
    }
    public set importLevel(importLevel: string  | undefined) {
        this['import_level'] = importLevel;
    }
    public get importLevel(): string | undefined {
        return this['import_level'];
    }
    public withIsImportCloumn(isImportCloumn: boolean): ShowSupportObjectTypeResponse {
        this['is_import_cloumn'] = isImportCloumn;
        return this;
    }
    public set isImportCloumn(isImportCloumn: boolean  | undefined) {
        this['is_import_cloumn'] = isImportCloumn;
    }
    public get isImportCloumn(): boolean | undefined {
        return this['is_import_cloumn'];
    }
    public withImportMappingType(importMappingType: string): ShowSupportObjectTypeResponse {
        this['import_mapping_type'] = importMappingType;
        return this;
    }
    public set importMappingType(importMappingType: string  | undefined) {
        this['import_mapping_type'] = importMappingType;
    }
    public get importMappingType(): string | undefined {
        return this['import_mapping_type'];
    }
    public withIsImportUniqueKey(isImportUniqueKey: boolean): ShowSupportObjectTypeResponse {
        this['is_import_unique_key'] = isImportUniqueKey;
        return this;
    }
    public set isImportUniqueKey(isImportUniqueKey: boolean  | undefined) {
        this['is_import_unique_key'] = isImportUniqueKey;
    }
    public get isImportUniqueKey(): boolean | undefined {
        return this['is_import_unique_key'];
    }
}