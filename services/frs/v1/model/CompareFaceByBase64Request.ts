import { FaceCompareBase64Req } from './FaceCompareBase64Req';


export class CompareFaceByBase64Request {
    public body?: FaceCompareBase64Req;
    public constructor() { 
    }
    public withBody(body: FaceCompareBase64Req): CompareFaceByBase64Request {
        this['body'] = body;
        return this;
    }
}