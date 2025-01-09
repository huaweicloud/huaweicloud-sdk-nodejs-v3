import { ListDownloadAddressRequestBody } from './ListDownloadAddressRequestBody';


export class ListDownloadAddressRequest {
    public body?: ListDownloadAddressRequestBody;
    public constructor() { 
    }
    public withBody(body: ListDownloadAddressRequestBody): ListDownloadAddressRequest {
        this['body'] = body;
        return this;
    }
}