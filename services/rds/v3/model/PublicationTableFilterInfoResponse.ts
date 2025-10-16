

export class PublicationTableFilterInfoResponse {
    public relation?: string;
    public column?: string;
    public condition?: string;
    public value?: string;
    public filters?: Array<PublicationTableFilterInfoResponse>;
    public constructor() { 
    }
    public withRelation(relation: string): PublicationTableFilterInfoResponse {
        this['relation'] = relation;
        return this;
    }
    public withColumn(column: string): PublicationTableFilterInfoResponse {
        this['column'] = column;
        return this;
    }
    public withCondition(condition: string): PublicationTableFilterInfoResponse {
        this['condition'] = condition;
        return this;
    }
    public withValue(value: string): PublicationTableFilterInfoResponse {
        this['value'] = value;
        return this;
    }
    public withFilters(filters: Array<PublicationTableFilterInfoResponse>): PublicationTableFilterInfoResponse {
        this['filters'] = filters;
        return this;
    }
}