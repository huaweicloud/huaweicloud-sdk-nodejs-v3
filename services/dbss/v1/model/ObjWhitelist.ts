

export class ObjWhitelist {
    private 'db_ids'?: Array<string>;
    public desc?: string;
    public enabled?: boolean;
    public sql?: string;
    public constructor(sql?: string) { 
        this['sql'] = sql;
    }
    public withDbIds(dbIds: Array<string>): ObjWhitelist {
        this['db_ids'] = dbIds;
        return this;
    }
    public set dbIds(dbIds: Array<string>  | undefined) {
        this['db_ids'] = dbIds;
    }
    public get dbIds(): Array<string> | undefined {
        return this['db_ids'];
    }
    public withDesc(desc: string): ObjWhitelist {
        this['desc'] = desc;
        return this;
    }
    public withEnabled(enabled: boolean): ObjWhitelist {
        this['enabled'] = enabled;
        return this;
    }
    public withSql(sql: string): ObjWhitelist {
        this['sql'] = sql;
        return this;
    }
}