import { BlackWhiteIpListRequest } from './BlackWhiteIpListRequest';


export class DeleteBlackWhiteIpListRequest {
    public body?: BlackWhiteIpListRequest;
    public constructor() { 
    }
    public withBody(body: BlackWhiteIpListRequest): DeleteBlackWhiteIpListRequest {
        this['body'] = body;
        return this;
    }
}