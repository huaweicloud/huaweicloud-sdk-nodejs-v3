import { AddFacesUrlReq } from './AddFacesUrlReq';


export class AddFacesByUrlRequest {
    private 'face_set_name': string | undefined;
    public body?: AddFacesUrlReq;
    public constructor(faceSetName?: any) { 
        this['face_set_name'] = faceSetName;
    }
    public withFaceSetName(faceSetName: string): AddFacesByUrlRequest {
        this['face_set_name'] = faceSetName;
        return this;
    }
    public set faceSetName(faceSetName: string | undefined) {
        this['face_set_name'] = faceSetName;
    }
    public get faceSetName() {
        return this['face_set_name'];
    }
    public withBody(body: AddFacesUrlReq): AddFacesByUrlRequest {
        this['body'] = body;
        return this;
    }
}