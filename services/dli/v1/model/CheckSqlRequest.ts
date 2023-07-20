import { CheckSqlRequestBody } from './CheckSqlRequestBody';


export class CheckSqlRequest {
    public body?: CheckSqlRequestBody;
    public constructor() { 
    }
    public withBody(body: CheckSqlRequestBody): CheckSqlRequest {
        this['body'] = body;
        return this;
    }
}