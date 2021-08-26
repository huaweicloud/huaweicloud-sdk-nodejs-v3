import { UpdateFaceReq } from './UpdateFaceReq';


export class UpdateFaceRequest {
    private 'face_set_name': string | undefined;
    public body?: UpdateFaceReq;
    public constructor(faceSetName?: any) { 
        this['face_set_name'] = faceSetName;
    }
    public withFaceSetName(faceSetName: string): UpdateFaceRequest {
        this['face_set_name'] = faceSetName;
        return this;
    }
    public set faceSetName(faceSetName: string | undefined) {
        this['face_set_name'] = faceSetName;
    }
    public get faceSetName() {
        return this['face_set_name'];
    }
    public withBody(body: UpdateFaceReq): UpdateFaceRequest {
        this['body'] = body;
        return this;
    }
}