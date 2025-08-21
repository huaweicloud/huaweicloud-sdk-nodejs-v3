

export class Filter {
    public field?: string;
    public values?: Array<string>;
    public operator?: FilterOperatorEnum | string;
    public constructor(field?: string, operator?: string) { 
        this['field'] = field;
        this['operator'] = operator;
    }
    public withField(field: string): Filter {
        this['field'] = field;
        return this;
    }
    public withValues(values: Array<string>): Filter {
        this['values'] = values;
        return this;
    }
    public withOperator(operator: FilterOperatorEnum | string): Filter {
        this['operator'] = operator;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum FilterOperatorEnum {
    EQUAL = 'equal',
    NOT_EQUAL = 'not_equal',
    CONTAIN = 'contain',
    STARTS_WITH = 'starts_with'
}
