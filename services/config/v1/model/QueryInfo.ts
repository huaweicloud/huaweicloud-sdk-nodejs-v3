

export class QueryInfo {
    private 'select_fields'?: Array<string> | undefined;
    public constructor() { 
    }
    public withSelectFields(selectFields: Array<string>): QueryInfo {
        this['select_fields'] = selectFields;
        return this;
    }
    public set selectFields(selectFields: Array<string> | undefined) {
        this['select_fields'] = selectFields;
    }
    public get selectFields() {
        return this['select_fields'];
    }
}