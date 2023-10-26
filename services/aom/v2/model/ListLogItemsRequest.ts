import { QueryBodyParam } from './QueryBodyParam';


export class ListLogItemsRequest {
    public type?: string;
    public body?: QueryBodyParam;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withType(type: string): ListLogItemsRequest {
        this['type'] = type;
        return this;
    }
    public withBody(body: QueryBodyParam): ListLogItemsRequest {
        this['body'] = body;
        return this;
    }
}