import { HyperinstanceGroupsCapacityRequest } from './HyperinstanceGroupsCapacityRequest';


export class ListHyperinstanceGroupsCapacityRequest {
    public body?: HyperinstanceGroupsCapacityRequest;
    public constructor() { 
    }
    public withBody(body: HyperinstanceGroupsCapacityRequest): ListHyperinstanceGroupsCapacityRequest {
        this['body'] = body;
        return this;
    }
}