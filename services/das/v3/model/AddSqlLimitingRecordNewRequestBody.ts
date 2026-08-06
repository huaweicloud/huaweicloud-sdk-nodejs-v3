

export class AddSqlLimitingRecordNewRequestBody {
    private 'engine_type'?: string;
    public type?: string;
    private 'key_str'?: string;
    private 'max_waiting'?: number;
    private 'max_connection'?: number;
    private 'his_sql_limiting_switch'?: boolean;
    private 'node_ids'?: Array<string>;
    public automaticity?: boolean;
    public duration?: number;
    public constructor(engineType?: string, type?: string, keyStr?: string, maxConnection?: number) { 
        this['engine_type'] = engineType;
        this['type'] = type;
        this['key_str'] = keyStr;
        this['max_connection'] = maxConnection;
    }
    public withEngineType(engineType: string): AddSqlLimitingRecordNewRequestBody {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withType(type: string): AddSqlLimitingRecordNewRequestBody {
        this['type'] = type;
        return this;
    }
    public withKeyStr(keyStr: string): AddSqlLimitingRecordNewRequestBody {
        this['key_str'] = keyStr;
        return this;
    }
    public set keyStr(keyStr: string  | undefined) {
        this['key_str'] = keyStr;
    }
    public get keyStr(): string | undefined {
        return this['key_str'];
    }
    public withMaxWaiting(maxWaiting: number): AddSqlLimitingRecordNewRequestBody {
        this['max_waiting'] = maxWaiting;
        return this;
    }
    public set maxWaiting(maxWaiting: number  | undefined) {
        this['max_waiting'] = maxWaiting;
    }
    public get maxWaiting(): number | undefined {
        return this['max_waiting'];
    }
    public withMaxConnection(maxConnection: number): AddSqlLimitingRecordNewRequestBody {
        this['max_connection'] = maxConnection;
        return this;
    }
    public set maxConnection(maxConnection: number  | undefined) {
        this['max_connection'] = maxConnection;
    }
    public get maxConnection(): number | undefined {
        return this['max_connection'];
    }
    public withHisSqlLimitingSwitch(hisSqlLimitingSwitch: boolean): AddSqlLimitingRecordNewRequestBody {
        this['his_sql_limiting_switch'] = hisSqlLimitingSwitch;
        return this;
    }
    public set hisSqlLimitingSwitch(hisSqlLimitingSwitch: boolean  | undefined) {
        this['his_sql_limiting_switch'] = hisSqlLimitingSwitch;
    }
    public get hisSqlLimitingSwitch(): boolean | undefined {
        return this['his_sql_limiting_switch'];
    }
    public withNodeIds(nodeIds: Array<string>): AddSqlLimitingRecordNewRequestBody {
        this['node_ids'] = nodeIds;
        return this;
    }
    public set nodeIds(nodeIds: Array<string>  | undefined) {
        this['node_ids'] = nodeIds;
    }
    public get nodeIds(): Array<string> | undefined {
        return this['node_ids'];
    }
    public withAutomaticity(automaticity: boolean): AddSqlLimitingRecordNewRequestBody {
        this['automaticity'] = automaticity;
        return this;
    }
    public withDuration(duration: number): AddSqlLimitingRecordNewRequestBody {
        this['duration'] = duration;
        return this;
    }
}