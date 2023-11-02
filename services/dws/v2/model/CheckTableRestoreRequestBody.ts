import { TableDetail } from './TableDetail';


export class CheckTableRestoreRequestBody {
    private 'case_sensitive'?: boolean;
    public database?: string;
    private 'restore_table_list'?: Array<TableDetail>;
    private 'target_table_list'?: Array<TableDetail>;
    public constructor(caseSensitive?: boolean, database?: string, restoreTableList?: Array<TableDetail>, targetTableList?: Array<TableDetail>) { 
        this['case_sensitive'] = caseSensitive;
        this['database'] = database;
        this['restore_table_list'] = restoreTableList;
        this['target_table_list'] = targetTableList;
    }
    public withCaseSensitive(caseSensitive: boolean): CheckTableRestoreRequestBody {
        this['case_sensitive'] = caseSensitive;
        return this;
    }
    public set caseSensitive(caseSensitive: boolean  | undefined) {
        this['case_sensitive'] = caseSensitive;
    }
    public get caseSensitive(): boolean | undefined {
        return this['case_sensitive'];
    }
    public withDatabase(database: string): CheckTableRestoreRequestBody {
        this['database'] = database;
        return this;
    }
    public withRestoreTableList(restoreTableList: Array<TableDetail>): CheckTableRestoreRequestBody {
        this['restore_table_list'] = restoreTableList;
        return this;
    }
    public set restoreTableList(restoreTableList: Array<TableDetail>  | undefined) {
        this['restore_table_list'] = restoreTableList;
    }
    public get restoreTableList(): Array<TableDetail> | undefined {
        return this['restore_table_list'];
    }
    public withTargetTableList(targetTableList: Array<TableDetail>): CheckTableRestoreRequestBody {
        this['target_table_list'] = targetTableList;
        return this;
    }
    public set targetTableList(targetTableList: Array<TableDetail>  | undefined) {
        this['target_table_list'] = targetTableList;
    }
    public get targetTableList(): Array<TableDetail> | undefined {
        return this['target_table_list'];
    }
}