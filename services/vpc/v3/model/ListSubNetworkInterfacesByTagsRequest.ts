import { ListSubNetworkInterfacesByTagsRequestBody } from './ListSubNetworkInterfacesByTagsRequestBody';


export class ListSubNetworkInterfacesByTagsRequest {
    public limit?: string;
    public offset?: number;
    public body?: ListSubNetworkInterfacesByTagsRequestBody;
    public constructor() { 
    }
    public withLimit(limit: string): ListSubNetworkInterfacesByTagsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListSubNetworkInterfacesByTagsRequest {
        this['offset'] = offset;
        return this;
    }
    public withBody(body: ListSubNetworkInterfacesByTagsRequestBody): ListSubNetworkInterfacesByTagsRequest {
        this['body'] = body;
        return this;
    }
}