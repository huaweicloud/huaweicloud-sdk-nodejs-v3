

export class ReplayErrorSqlResp {
    private 'object_type'?: string;
    private 'abnormal_sql'?: string;
    private 'abnormal_info'?: string;
    public constructor() { 
    }
    public withObjectType(objectType: string): ReplayErrorSqlResp {
        this['object_type'] = objectType;
        return this;
    }
    public set objectType(objectType: string  | undefined) {
        this['object_type'] = objectType;
    }
    public get objectType(): string | undefined {
        return this['object_type'];
    }
    public withAbnormalSql(abnormalSql: string): ReplayErrorSqlResp {
        this['abnormal_sql'] = abnormalSql;
        return this;
    }
    public set abnormalSql(abnormalSql: string  | undefined) {
        this['abnormal_sql'] = abnormalSql;
    }
    public get abnormalSql(): string | undefined {
        return this['abnormal_sql'];
    }
    public withAbnormalInfo(abnormalInfo: string): ReplayErrorSqlResp {
        this['abnormal_info'] = abnormalInfo;
        return this;
    }
    public set abnormalInfo(abnormalInfo: string  | undefined) {
        this['abnormal_info'] = abnormalInfo;
    }
    public get abnormalInfo(): string | undefined {
        return this['abnormal_info'];
    }
}