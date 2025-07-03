

export class OrderParam {
    public field?: string;
    public order?: OrderParamOrderEnum | string;
    public constructor() { 
    }
    public withField(field: string): OrderParam {
        this['field'] = field;
        return this;
    }
    public withOrder(order: OrderParamOrderEnum | string): OrderParam {
        this['order'] = order;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum OrderParamOrderEnum {
    ASC = 'ASC',
    DESC = 'DESC'
}
