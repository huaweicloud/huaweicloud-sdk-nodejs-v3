

export class DataRow {
    public kind?: string;
    public fields?: Array<object>;
    public constructor() { 
    }
    public withKind(kind: string): DataRow {
        this['kind'] = kind;
        return this;
    }
    public withFields(fields: Array<object>): DataRow {
        this['fields'] = fields;
        return this;
    }
}