import { UpdateFullSqlSwitchRequestBody } from './UpdateFullSqlSwitchRequestBody';


export class UpdateFullSqlSwitchRequest {
    public body?: UpdateFullSqlSwitchRequestBody;
    public constructor() { 
    }
    public withBody(body: UpdateFullSqlSwitchRequestBody): UpdateFullSqlSwitchRequest {
        this['body'] = body;
        return this;
    }
}