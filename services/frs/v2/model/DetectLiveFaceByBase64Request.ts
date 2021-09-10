import { LiveDetectFaceBase64Req } from './LiveDetectFaceBase64Req';


export class DetectLiveFaceByBase64Request {
    public body?: LiveDetectFaceBase64Req;
    public constructor() { 
    }
    public withBody(body: LiveDetectFaceBase64Req): DetectLiveFaceByBase64Request {
        this['body'] = body;
        return this;
    }
}