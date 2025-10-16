

export class PublicationTableFilterInfoRequest {
    public relation?: string;
    public column?: string;
    public condition?: string;
    public value?: string;
    public filters?: Array<PublicationTableFilterInfoRequest>;
    public constructor() { 
    }
    public withRelation(relation: string): PublicationTableFilterInfoRequest {
        this['relation'] = relation;
        return this;
    }
    public withColumn(column: string): PublicationTableFilterInfoRequest {
        this['column'] = column;
        return this;
    }
    public withCondition(condition: string): PublicationTableFilterInfoRequest {
        this['condition'] = condition;
        return this;
    }
    public withValue(value: string): PublicationTableFilterInfoRequest {
        this['value'] = value;
        return this;
    }
    public withFilters(filters: Array<PublicationTableFilterInfoRequest>): PublicationTableFilterInfoRequest {
        this['filters'] = filters;
        return this;
    }
}