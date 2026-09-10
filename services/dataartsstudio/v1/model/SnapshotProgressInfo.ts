import { SnapshotTableProgressInfo } from './SnapshotTableProgressInfo';


export class SnapshotProgressInfo {
    public progress?: string;
    private 'database_total'?: number;
    private 'database_processed'?: number;
    private 'schema_total'?: number;
    private 'schema_processed'?: number;
    private 'table_total'?: number;
    private 'table_processed'?: number;
    private 'table_progress'?: Array<SnapshotTableProgressInfo>;
    public constructor() { 
    }
    public withProgress(progress: string): SnapshotProgressInfo {
        this['progress'] = progress;
        return this;
    }
    public withDatabaseTotal(databaseTotal: number): SnapshotProgressInfo {
        this['database_total'] = databaseTotal;
        return this;
    }
    public set databaseTotal(databaseTotal: number  | undefined) {
        this['database_total'] = databaseTotal;
    }
    public get databaseTotal(): number | undefined {
        return this['database_total'];
    }
    public withDatabaseProcessed(databaseProcessed: number): SnapshotProgressInfo {
        this['database_processed'] = databaseProcessed;
        return this;
    }
    public set databaseProcessed(databaseProcessed: number  | undefined) {
        this['database_processed'] = databaseProcessed;
    }
    public get databaseProcessed(): number | undefined {
        return this['database_processed'];
    }
    public withSchemaTotal(schemaTotal: number): SnapshotProgressInfo {
        this['schema_total'] = schemaTotal;
        return this;
    }
    public set schemaTotal(schemaTotal: number  | undefined) {
        this['schema_total'] = schemaTotal;
    }
    public get schemaTotal(): number | undefined {
        return this['schema_total'];
    }
    public withSchemaProcessed(schemaProcessed: number): SnapshotProgressInfo {
        this['schema_processed'] = schemaProcessed;
        return this;
    }
    public set schemaProcessed(schemaProcessed: number  | undefined) {
        this['schema_processed'] = schemaProcessed;
    }
    public get schemaProcessed(): number | undefined {
        return this['schema_processed'];
    }
    public withTableTotal(tableTotal: number): SnapshotProgressInfo {
        this['table_total'] = tableTotal;
        return this;
    }
    public set tableTotal(tableTotal: number  | undefined) {
        this['table_total'] = tableTotal;
    }
    public get tableTotal(): number | undefined {
        return this['table_total'];
    }
    public withTableProcessed(tableProcessed: number): SnapshotProgressInfo {
        this['table_processed'] = tableProcessed;
        return this;
    }
    public set tableProcessed(tableProcessed: number  | undefined) {
        this['table_processed'] = tableProcessed;
    }
    public get tableProcessed(): number | undefined {
        return this['table_processed'];
    }
    public withTableProgress(tableProgress: Array<SnapshotTableProgressInfo>): SnapshotProgressInfo {
        this['table_progress'] = tableProgress;
        return this;
    }
    public set tableProgress(tableProgress: Array<SnapshotTableProgressInfo>  | undefined) {
        this['table_progress'] = tableProgress;
    }
    public get tableProgress(): Array<SnapshotTableProgressInfo> | undefined {
        return this['table_progress'];
    }
}