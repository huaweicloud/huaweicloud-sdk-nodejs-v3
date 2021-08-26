import { FaceCompareUrlReq } from './FaceCompareUrlReq';


export class CompareFaceByUrlRequest {
    public body?: FaceCompareUrlReq;
    public constructor() { 
    }
    public withBody(body: FaceCompareUrlReq): CompareFaceByUrlRequest {
        this['body'] = body;
        return this;
    }
}