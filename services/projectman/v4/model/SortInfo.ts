

export class SortInfo {
    public asc?: boolean;
    public field?: string;
    public constructor() { 
    }
    public withAsc(asc: boolean): SortInfo {
        this['asc'] = asc;
        return this;
    }
    public withField(field: string): SortInfo {
        this['field'] = field;
        return this;
    }
}