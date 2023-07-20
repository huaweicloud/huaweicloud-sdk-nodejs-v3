import { RestoreDatabasesInfo } from './RestoreDatabasesInfo';


export class RestoreTablesRequestBody {
    public restoreTime?: number;
    public restoreTables?: Array<RestoreDatabasesInfo>;
    private 'is_fast_restore'?: boolean;
    public constructor(restoreTime?: number, restoreTables?: Array<RestoreDatabasesInfo>) { 
        this['restoreTime'] = restoreTime;
        this['restoreTables'] = restoreTables;
    }
    public withRestoreTime(restoreTime: number): RestoreTablesRequestBody {
        this['restoreTime'] = restoreTime;
        return this;
    }
    public withRestoreTables(restoreTables: Array<RestoreDatabasesInfo>): RestoreTablesRequestBody {
        this['restoreTables'] = restoreTables;
        return this;
    }
    public withIsFastRestore(isFastRestore: boolean): RestoreTablesRequestBody {
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