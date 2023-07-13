

export class ConsumerList {
    public topics?: Array<string>;
    public total?: number;
    public constructor() { 
    }
    public withTopics(topics: Array<string>): ConsumerList {
        this['topics'] = topics;
        return this;
    }
    public withTotal(total: number): ConsumerList {
        this['total'] = total;
        return this;
    }
}