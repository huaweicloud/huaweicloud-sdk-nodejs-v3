

export class CheckTableNameResult {
    public database?: string;
    private 'restore_table_list'?: Array<string>;
    private 'target_table_list'?: Array<string>;
    public constructor() { 
    }
    public withDatabase(database: string): CheckTableNameResult {
        this['database'] = database;
        return this;
    }
    public withRestoreTableList(restoreTableList: Array<string>): CheckTableNameResult {
        this['restore_table_list'] = restoreTableList;
        return this;
    }
    public set restoreTableList(restoreTableList: Array<string>  | undefined) {
        this['restore_table_list'] = restoreTableList;
    }
    public get restoreTableList(): Array<string> | undefined {
        return this['restore_table_list'];
    }
    public withTargetTableList(targetTableList: Array<string>): CheckTableNameResult {
        this['target_table_list'] = targetTableList;
        return this;
    }
    public set targetTableList(targetTableList: Array<string>  | undefined) {
        this['target_table_list'] = targetTableList;
    }
    public get targetTableList(): Array<string> | undefined {
        return this['target_table_list'];
    }
}