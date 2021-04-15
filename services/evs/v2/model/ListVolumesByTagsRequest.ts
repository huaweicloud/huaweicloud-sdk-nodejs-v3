import { ListVolumesByTagsRequestBody } from './ListVolumesByTagsRequestBody';


export class ListVolumesByTagsRequest {
    public body?: ListVolumesByTagsRequestBody;
    public constructor() { 
    }
    public withBody(body: ListVolumesByTagsRequestBody): ListVolumesByTagsRequest {
        this['body'] = body;
        return this;
    }
}