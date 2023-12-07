import { ListNatsByTagsRequestBody } from './ListNatsByTagsRequestBody';


export class ListNatGatewayByTagRequest {
    public body?: ListNatsByTagsRequestBody;
    public constructor() { 
    }
    public withBody(body: ListNatsByTagsRequestBody): ListNatGatewayByTagRequest {
        this['body'] = body;
        return this;
    }
}