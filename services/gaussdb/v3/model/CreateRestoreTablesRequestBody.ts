import { CreateRestoreDatabaseTableInfo } from './CreateRestoreDatabaseTableInfo';


export class CreateRestoreTablesRequestBody {
    private 'restore_time'?: string;
    private 'last_table_info'?: string;
    private 'restore_tables'?: Array<CreateRestoreDatabaseTableInfo>;
    public constructor(restoreTime?: string, restoreTables?: Array<CreateRestoreDatabaseTableInfo>) { 
        this['restore_time'] = restoreTime;
        this['restore_tables'] = restoreTables;
    }
    public withRestoreTime(restoreTime: string): CreateRestoreTablesRequestBody {
        this['restore_time'] = restoreTime;
        return this;
    }
    public set restoreTime(restoreTime: string  | undefined) {
        this['restore_time'] = restoreTime;
    }
    public get restoreTime(): string | undefined {
        return this['restore_time'];
    }
    public withLastTableInfo(lastTableInfo: string): CreateRestoreTablesRequestBody {
        this['last_table_info'] = lastTableInfo;
        return this;
    }
    public set lastTableInfo(lastTableInfo: string  | undefined) {
        this['last_table_info'] = lastTableInfo;
    }
    public get lastTableInfo(): string | undefined {
        return this['last_table_info'];
    }
    public withRestoreTables(restoreTables: Array<CreateRestoreDatabaseTableInfo>): CreateRestoreTablesRequestBody {
        this['restore_tables'] = restoreTables;
        return this;
    }
    public set restoreTables(restoreTables: Array<CreateRestoreDatabaseTableInfo>  | undefined) {
        this['restore_tables'] = restoreTables;
    }
    public get restoreTables(): Array<CreateRestoreDatabaseTableInfo> | undefined {
        return this['restore_tables'];
    }
}