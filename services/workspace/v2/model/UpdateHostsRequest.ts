import { UpdateHostsRequestBody } from './UpdateHostsRequestBody';


export class UpdateHostsRequest {
    public body?: UpdateHostsRequestBody;
    public constructor() { 
    }
    public withBody(body: UpdateHostsRequestBody): UpdateHostsRequest {
        this['body'] = body;
        return this;
    }
}