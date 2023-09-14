import { RestoreDatabasesInfoNew } from './RestoreDatabasesInfoNew';


export class RestoreTablesNewRequestBody {
    private 'restore_time'?: number;
    private 'restore_tables'?: Array<RestoreDatabasesInfoNew>;
    private 'is_fast_restore'?: boolean;
    public constructor(restoreTime?: number, restoreTables?: Array<RestoreDatabasesInfoNew>) { 
        this['restore_time'] = restoreTime;
        this['restore_tables'] = restoreTables;
    }
    public withRestoreTime(restoreTime: number): RestoreTablesNewRequestBody {
        this['restore_time'] = restoreTime;
        return this;
    }
    public set restoreTime(restoreTime: number  | undefined) {
        this['restore_time'] = restoreTime;
    }
    public get restoreTime(): number | undefined {
        return this['restore_time'];
    }
    public withRestoreTables(restoreTables: Array<RestoreDatabasesInfoNew>): RestoreTablesNewRequestBody {
        this['restore_tables'] = restoreTables;
        return this;
    }
    public set restoreTables(restoreTables: Array<RestoreDatabasesInfoNew>  | undefined) {
        this['restore_tables'] = restoreTables;
    }
    public get restoreTables(): Array<RestoreDatabasesInfoNew> | undefined {
        return this['restore_tables'];
    }
    public withIsFastRestore(isFastRestore: boolean): RestoreTablesNewRequestBody {
        this['is_fast_restore'] = isFastRestore;
        return this;
    }
    public set isFastRestore(isFastRestore: boolean  | undefined) {
        this['is_fast_restore'] = isFastRestore;
    }
    public get isFastRestore(): boolean | undefined {
        return this['is_fast_restore'];
    }
}