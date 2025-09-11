

export class WhitelistBean {
    private 'create_timestamp_ms'?: number;
    private 'db_ids'?: Array<string>;
    public desc?: string;
    public enabled?: boolean;
    public id?: string;
    public sql?: string;
    private 'update_timestamp_ms'?: number;
    public constructor() { 
    }
    public withCreateTimestampMs(createTimestampMs: number): WhitelistBean {
        this['create_timestamp_ms'] = createTimestampMs;
        return this;
    }
    public set createTimestampMs(createTimestampMs: number  | undefined) {
        this['create_timestamp_ms'] = createTimestampMs;
    }
    public get createTimestampMs(): number | undefined {
        return this['create_timestamp_ms'];
    }
    public withDbIds(dbIds: Array<string>): WhitelistBean {
        this['db_ids'] = dbIds;
        return this;
    }
    public set dbIds(dbIds: Array<string>  | undefined) {
        this['db_ids'] = dbIds;
    }
    public get dbIds(): Array<string> | undefined {
        return this['db_ids'];
    }
    public withDesc(desc: string): WhitelistBean {
        this['desc'] = desc;
        return this;
    }
    public withEnabled(enabled: boolean): WhitelistBean {
        this['enabled'] = enabled;
        return this;
    }
    public withId(id: string): WhitelistBean {
        this['id'] = id;
        return this;
    }
    public withSql(sql: string): WhitelistBean {
        this['sql'] = sql;
        return this;
    }
    public withUpdateTimestampMs(updateTimestampMs: number): WhitelistBean {
        this['update_timestamp_ms'] = updateTimestampMs;
        return this;
    }
    public set updateTimestampMs(updateTimestampMs: number  | undefined) {
        this['update_timestamp_ms'] = updateTimestampMs;
    }
    public get updateTimestampMs(): number | undefined {
        return this['update_timestamp_ms'];
    }
}