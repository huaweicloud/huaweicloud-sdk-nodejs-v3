import { FaceSearchBase64Req } from './FaceSearchBase64Req';


export class SearchFaceByBase64Request {
    private 'face_set_name': string | undefined;
    public body?: FaceSearchBase64Req;
    public constructor(faceSetName?: any) { 
        this['face_set_name'] = faceSetName;
    }
    public withFaceSetName(faceSetName: string): SearchFaceByBase64Request {
        this['face_set_name'] = faceSetName;
        return this;
    }
    public set faceSetName(faceSetName: string | undefined) {
        this['face_set_name'] = faceSetName;
    }
    public get faceSetName() {
        return this['face_set_name'];
    }
    public withBody(body: FaceSearchBase64Req): SearchFaceByBase64Request {
        this['body'] = body;
        return this;
    }
}