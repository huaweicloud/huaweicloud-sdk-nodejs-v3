import { DbMatchInfo } from './DbMatchInfo';


export class DbScanResultInfo {
    private 'task_id'?: string;
    private 'db_name'?: string;
    private 'table_id'?: string;
    private 'table_name'?: string;
    private 'risk_level'?: number;
    private 'sensitive_data_type'?: Array<string>;
    private 'match_info'?: Array<DbMatchInfo>;
    public constructor() { 
    }
    public withTaskId(taskId: string): DbScanResultInfo {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withDbName(dbName: string): DbScanResultInfo {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withTableId(tableId: string): DbScanResultInfo {
        this['table_id'] = tableId;
        return this;
    }
    public set tableId(tableId: string  | undefined) {
        this['table_id'] = tableId;
    }
    public get tableId(): string | undefined {
        return this['table_id'];
    }
    public withTableName(tableName: string): DbScanResultInfo {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withRiskLevel(riskLevel: number): DbScanResultInfo {
        this['risk_level'] = riskLevel;
        return this;
    }
    public set riskLevel(riskLevel: number  | undefined) {
        this['risk_level'] = riskLevel;
    }
    public get riskLevel(): number | undefined {
        return this['risk_level'];
    }
    public withSensitiveDataType(sensitiveDataType: Array<string>): DbScanResultInfo {
        this['sensitive_data_type'] = sensitiveDataType;
        return this;
    }
    public set sensitiveDataType(sensitiveDataType: Array<string>  | undefined) {
        this['sensitive_data_type'] = sensitiveDataType;
    }
    public get sensitiveDataType(): Array<string> | undefined {
        return this['sensitive_data_type'];
    }
    public withMatchInfo(matchInfo: Array<DbMatchInfo>): DbScanResultInfo {
        this['match_info'] = matchInfo;
        return this;
    }
    public set matchInfo(matchInfo: Array<DbMatchInfo>  | undefined) {
        this['match_info'] = matchInfo;
    }
    public get matchInfo(): Array<DbMatchInfo> | undefined {
        return this['match_info'];
    }
}