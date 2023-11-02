

export class Sort {
    public attribute?: string;
    public order?: string;
    public constructor() { 
    }
    public withAttribute(attribute: string): Sort {
        this['attribute'] = attribute;
        return this;
    }
    public withOrder(order: string): Sort {
        this['order'] = order;
        return this;
    }
}