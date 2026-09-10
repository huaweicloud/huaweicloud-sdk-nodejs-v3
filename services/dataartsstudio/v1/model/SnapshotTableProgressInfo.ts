

export class SnapshotTableProgressInfo {
    public progress?: string;
    public database?: string;
    public table?: string;
    private 'records_read'?: number;
    private 'logic_table'?: boolean;
    private 'sub_table_progress'?: Array<SnapshotTableProgressInfo>;
    public constructor() { 
    }
    public withProgress(progress: string): SnapshotTableProgressInfo {
        this['progress'] = progress;
        return this;
    }
    public withDatabase(database: string): SnapshotTableProgressInfo {
        this['database'] = database;
        return this;
    }
    public withTable(table: string): SnapshotTableProgressInfo {
        this['table'] = table;
        return this;
    }
    public withRecordsRead(recordsRead: number): SnapshotTableProgressInfo {
        this['records_read'] = recordsRead;
        return this;
    }
    public set recordsRead(recordsRead: number  | undefined) {
        this['records_read'] = recordsRead;
    }
    public get recordsRead(): number | undefined {
        return this['records_read'];
    }
    public withLogicTable(logicTable: boolean): SnapshotTableProgressInfo {
        this['logic_table'] = logicTable;
        return this;
    }
    public set logicTable(logicTable: boolean  | undefined) {
        this['logic_table'] = logicTable;
    }
    public get logicTable(): boolean | undefined {
        return this['logic_table'];
    }
    public withSubTableProgress(subTableProgress: Array<SnapshotTableProgressInfo>): SnapshotTableProgressInfo {
        this['sub_table_progress'] = subTableProgress;
        return this;
    }
    public set subTableProgress(subTableProgress: Array<SnapshotTableProgressInfo>  | undefined) {
        this['sub_table_progress'] = subTableProgress;
    }
    public get subTableProgress(): Array<SnapshotTableProgressInfo> | undefined {
        return this['sub_table_progress'];
    }
}