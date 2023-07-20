

export class SqlsSampleResp {
    public lang?: string;
    public name?: string;
    public sql?: string;
    public description?: string;
    public group?: string;
    public constructor() { 
    }
    public withLang(lang: string): SqlsSampleResp {
        this['lang'] = lang;
        return this;
    }
    public withName(name: string): SqlsSampleResp {
        this['name'] = name;
        return this;
    }
    public withSql(sql: string): SqlsSampleResp {
        this['sql'] = sql;
        return this;
    }
    public withDescription(description: string): SqlsSampleResp {
        this['description'] = description;
        return this;
    }
    public withGroup(group: string): SqlsSampleResp {
        this['group'] = group;
        return this;
    }
}