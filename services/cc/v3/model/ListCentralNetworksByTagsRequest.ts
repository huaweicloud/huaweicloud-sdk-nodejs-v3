import { ListCentralNetworksByTagsRequestBody } from './ListCentralNetworksByTagsRequestBody';


export class ListCentralNetworksByTagsRequest {
    public limit?: number;
    public marker?: string;
    public body?: ListCentralNetworksByTagsRequestBody;
    public constructor() { 
    }
    public withLimit(limit: number): ListCentralNetworksByTagsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListCentralNetworksByTagsRequest {
        this['marker'] = marker;
        return this;
    }
    public withBody(body: ListCentralNetworksByTagsRequestBody): ListCentralNetworksByTagsRequest {
        this['body'] = body;
        return this;
    }
}