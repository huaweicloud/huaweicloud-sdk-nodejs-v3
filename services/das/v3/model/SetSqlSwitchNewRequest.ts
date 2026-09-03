import { SetSqlSwitchNewRequestBody } from './SetSqlSwitchNewRequestBody';


export class SetSqlSwitchNewRequest {
    public body?: SetSqlSwitchNewRequestBody;
    public constructor() { 
    }
    public withBody(body: SetSqlSwitchNewRequestBody): SetSqlSwitchNewRequest {
        this['body'] = body;
        return this;
    }
}