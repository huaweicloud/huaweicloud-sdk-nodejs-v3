

export class UrlMatchDTO {
    public operator?: UrlMatchDTOOperatorEnum | string;
    public value?: string;
    public constructor(operator?: string, value?: string) { 
        this['operator'] = operator;
        this['value'] = value;
    }
    public withOperator(operator: UrlMatchDTOOperatorEnum | string): UrlMatchDTO {
        this['operator'] = operator;
        return this;
    }
    public withValue(value: string): UrlMatchDTO {
        this['value'] = value;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UrlMatchDTOOperatorEnum {
    EQUAL = 'EQUAL',
    CONTAIN = 'CONTAIN'
}
