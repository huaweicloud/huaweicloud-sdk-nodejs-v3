import { ListSqlLimitUserInstanceRequestBody } from './ListSqlLimitUserInstanceRequestBody';


export class ListSqlLimitUserInstanceRequest {
    public body?: ListSqlLimitUserInstanceRequestBody;
    public constructor() { 
    }
    public withBody(body: ListSqlLimitUserInstanceRequestBody): ListSqlLimitUserInstanceRequest {
        this['body'] = body;
        return this;
    }
}