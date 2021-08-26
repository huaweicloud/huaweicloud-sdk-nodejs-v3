import { FaceDetectBase64Req } from './FaceDetectBase64Req';


export class DetectFaceByBase64Request {
    public body?: FaceDetectBase64Req;
    public constructor() { 
    }
    public withBody(body: FaceDetectBase64Req): DetectFaceByBase64Request {
        this['body'] = body;
        return this;
    }
}