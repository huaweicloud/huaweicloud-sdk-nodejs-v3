import { ListFullSqlTasksRequestBody } from './ListFullSqlTasksRequestBody';


export class ListFullSqlTasksApiRequest {
    public body?: ListFullSqlTasksRequestBody;
    public constructor() { 
    }
    public withBody(body: ListFullSqlTasksRequestBody): ListFullSqlTasksApiRequest {
        this['body'] = body;
        return this;
    }
}