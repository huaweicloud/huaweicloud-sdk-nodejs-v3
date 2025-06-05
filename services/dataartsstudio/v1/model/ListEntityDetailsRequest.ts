

export class ListEntityDetailsRequest {
    public instance?: string;
    public body?: Array<string>;
    public constructor(instance?: string) { 
        this['instance'] = instance;
    }
    public withInstance(instance: string): ListEntityDetailsRequest {
        this['instance'] = instance;
        return this;
    }
    public withBody(body: Array<string>): ListEntityDetailsRequest {
        this['body'] = body;
        return this;
    }
}