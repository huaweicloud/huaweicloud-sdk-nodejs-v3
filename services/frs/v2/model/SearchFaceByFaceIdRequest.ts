import { FaceSearchFaceIdReq } from './FaceSearchFaceIdReq';


export class SearchFaceByFaceIdRequest {
    private 'face_set_name': string | undefined;
    public body?: FaceSearchFaceIdReq;
    public constructor(faceSetName?: any) { 
        this['face_set_name'] = faceSetName;
    }
    public withFaceSetName(faceSetName: string): SearchFaceByFaceIdRequest {
        this['face_set_name'] = faceSetName;
        return this;
    }
    public set faceSetName(faceSetName: string | undefined) {
        this['face_set_name'] = faceSetName;
    }
    public get faceSetName() {
        return this['face_set_name'];
    }
    public withBody(body: FaceSearchFaceIdReq): SearchFaceByFaceIdRequest {
        this['body'] = body;
        return this;
    }
}