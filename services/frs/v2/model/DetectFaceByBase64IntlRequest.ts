import { FaceDetectBase64Req } from './FaceDetectBase64Req';


export class DetectFaceByBase64IntlRequest {
    public body?: FaceDetectBase64Req;
    public constructor() { 
    }
    public withBody(body: FaceDetectBase64Req): DetectFaceByBase64IntlRequest {
        this['body'] = body;
        return this;
    }
}