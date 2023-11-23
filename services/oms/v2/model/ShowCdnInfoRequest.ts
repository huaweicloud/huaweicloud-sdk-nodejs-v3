import { ShowCdnInfoReq } from './ShowCdnInfoReq';


export class ShowCdnInfoRequest {
    public body?: ShowCdnInfoReq;
    public constructor() { 
    }
    public withBody(body: ShowCdnInfoReq): ShowCdnInfoRequest {
        this['body'] = body;
        return this;
    }
}