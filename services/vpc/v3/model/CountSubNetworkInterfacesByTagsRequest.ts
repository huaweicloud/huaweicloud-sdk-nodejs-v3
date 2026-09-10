import { CountSubNetworkInterfacesByTagsRequestBody } from './CountSubNetworkInterfacesByTagsRequestBody';


export class CountSubNetworkInterfacesByTagsRequest {
    public body?: CountSubNetworkInterfacesByTagsRequestBody;
    public constructor() { 
    }
    public withBody(body: CountSubNetworkInterfacesByTagsRequestBody): CountSubNetworkInterfacesByTagsRequest {
        this['body'] = body;
        return this;
    }
}