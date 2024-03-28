

export class SqlSampleTemplate {
    public lang?: string;
    public name?: string;
    public sql?: string;
    public description?: string;
    public group?: string;
    public constructor() { 
    }
    public withLang(lang: string): SqlSampleTemplate {
        this['lang'] = lang;
        return this;
    }
    public withName(name: string): SqlSampleTemplate {
        this['name'] = name;
        return this;
    }
    public withSql(sql: string): SqlSampleTemplate {
        this['sql'] = sql;
        return this;
    }
    public withDescription(description: string): SqlSampleTemplate {
        this['description'] = description;
        return this;
    }
    public withGroup(group: string): SqlSampleTemplate {
        this['group'] = group;
        return this;
    }
}