import { FaceDetectUrlReq } from './FaceDetectUrlReq';


export class DetectFaceByUrlIntlRequest {
    public body?: FaceDetectUrlReq;
    public constructor() { 
    }
    public withBody(body: FaceDetectUrlReq): DetectFaceByUrlIntlRequest {
        this['body'] = body;
        return this;
    }
}