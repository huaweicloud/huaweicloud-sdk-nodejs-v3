import { AddFacesByFileRequestBody } from './AddFacesByFileRequestBody';


export class AddFacesByFileRequest {
    private 'face_set_name': string | undefined;
    public body?: AddFacesByFileRequestBody;
    public constructor(faceSetName?: any) { 
        this['face_set_name'] = faceSetName;
    }
    public withFaceSetName(faceSetName: string): AddFacesByFileRequest {
        this['face_set_name'] = faceSetName;
        return this;
    }
    public set faceSetName(faceSetName: string | undefined) {
        this['face_set_name'] = faceSetName;
    }
    public get faceSetName() {
        return this['face_set_name'];
    }
    public withBody(body: AddFacesByFileRequestBody): AddFacesByFileRequest {
        this['body'] = body;
        return this;
    }
}