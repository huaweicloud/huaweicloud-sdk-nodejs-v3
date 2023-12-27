import { BlackWhiteIpListRequest } from './BlackWhiteIpListRequest';


export class AddBlackWhiteIpListRequest {
    public body?: BlackWhiteIpListRequest;
    public constructor() { 
    }
    public withBody(body: BlackWhiteIpListRequest): AddBlackWhiteIpListRequest {
        this['body'] = body;
        return this;
    }
}