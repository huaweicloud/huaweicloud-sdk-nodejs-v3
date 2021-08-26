import { DeleteFacesBatchReq } from './DeleteFacesBatchReq';


export class BatchDeleteFacesRequest {
    private 'face_set_name': string | undefined;
    public body?: DeleteFacesBatchReq;
    public constructor(faceSetName?: any) { 
        this['face_set_name'] = faceSetName;
    }
    public withFaceSetName(faceSetName: string): BatchDeleteFacesRequest {
        this['face_set_name'] = faceSetName;
        return this;
    }
    public set faceSetName(faceSetName: string | undefined) {
        this['face_set_name'] = faceSetName;
    }
    public get faceSetName() {
        return this['face_set_name'];
    }
    public withBody(body: DeleteFacesBatchReq): BatchDeleteFacesRequest {
        this['body'] = body;
        return this;
    }
}