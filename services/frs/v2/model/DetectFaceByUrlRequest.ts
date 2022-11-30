import { FaceDetectUrlReq } from './FaceDetectUrlReq';


export class DetectFaceByUrlRequest {
    public body?: FaceDetectUrlReq;
    public constructor() { 
    }
    public withBody(body: FaceDetectUrlReq): DetectFaceByUrlRequest {
        this['body'] = body;
        return this;
    }
}