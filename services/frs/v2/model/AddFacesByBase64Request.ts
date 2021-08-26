import { AddFacesBase64Req } from './AddFacesBase64Req';


export class AddFacesByBase64Request {
    private 'face_set_name': string | undefined;
    public body?: AddFacesBase64Req;
    public constructor(faceSetName?: any) { 
        this['face_set_name'] = faceSetName;
    }
    public withFaceSetName(faceSetName: string): AddFacesByBase64Request {
        this['face_set_name'] = faceSetName;
        return this;
    }
    public set faceSetName(faceSetName: string | undefined) {
        this['face_set_name'] = faceSetName;
    }
    public get faceSetName() {
        return this['face_set_name'];
    }
    public withBody(body: AddFacesBase64Req): AddFacesByBase64Request {
        this['body'] = body;
        return this;
    }
}