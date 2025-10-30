import { DatabaseTablesInfo } from './DatabaseTablesInfo';


export class QueryTableRequestV3 {
    private 'database_tables'?: Array<DatabaseTablesInfo>;
    private 'source_instance_id'?: string;
    private 'selected_tables'?: Array<DatabaseTablesInfo>;
    private 'filter_type'?: string;
    public constructor(databaseTables?: Array<DatabaseTablesInfo>, sourceInstanceId?: string, selectedTables?: Array<DatabaseTablesInfo>, filterType?: string) { 
        this['database_tables'] = databaseTables;
        this['source_instance_id'] = sourceInstanceId;
        this['selected_tables'] = selectedTables;
        this['filter_type'] = filterType;
    }
    public withDatabaseTables(databaseTables: Array<DatabaseTablesInfo>): QueryTableRequestV3 {
        this['database_tables'] = databaseTables;
        return this;
    }
    public set databaseTables(databaseTables: Array<DatabaseTablesInfo>  | undefined) {
        this['database_tables'] = databaseTables;
    }
    public get databaseTables(): Array<DatabaseTablesInfo> | undefined {
        return this['database_tables'];
    }
    public withSourceInstanceId(sourceInstanceId: string): QueryTableRequestV3 {
        this['source_instance_id'] = sourceInstanceId;
        return this;
    }
    public set sourceInstanceId(sourceInstanceId: string  | undefined) {
        this['source_instance_id'] = sourceInstanceId;
    }
    public get sourceInstanceId(): string | undefined {
        return this['source_instance_id'];
    }
    public withSelectedTables(selectedTables: Array<DatabaseTablesInfo>): QueryTableRequestV3 {
        this['selected_tables'] = selectedTables;
        return this;
    }
    public set selectedTables(selectedTables: Array<DatabaseTablesInfo>  | undefined) {
        this['selected_tables'] = selectedTables;
    }
    public get selectedTables(): Array<DatabaseTablesInfo> | undefined {
        return this['selected_tables'];
    }
    public withFilterType(filterType: string): QueryTableRequestV3 {
        this['filter_type'] = filterType;
        return this;
    }
    public set filterType(filterType: string  | undefined) {
        this['filter_type'] = filterType;
    }
    public get filterType(): string | undefined {
        return this['filter_type'];
    }
}