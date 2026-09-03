

export class SingleSqlTplCmp {
    public name?: string;
    public values?: Array<number>;
    public constructor() { 
    }
    public withName(name: string): SingleSqlTplCmp {
        this['name'] = name;
        return this;
    }
    public withValues(values: Array<number>): SingleSqlTplCmp {
        this['values'] = values;
        return this;
    }
}