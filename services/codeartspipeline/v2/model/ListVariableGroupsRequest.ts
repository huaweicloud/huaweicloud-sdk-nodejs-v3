import { ListVariableGroupsReq } from './ListVariableGroupsReq';


export class ListVariableGroupsRequest {
    public body?: ListVariableGroupsReq;
    public constructor() { 
    }
    public withBody(body: ListVariableGroupsReq): ListVariableGroupsRequest {
        this['body'] = body;
        return this;
    }
}