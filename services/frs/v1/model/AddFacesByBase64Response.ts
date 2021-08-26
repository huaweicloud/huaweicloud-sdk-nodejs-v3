import { FaceSetFace } from './FaceSetFace';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddFacesByBase64Response extends SdkResponse {
    private 'face_set_id'?: string | undefined;
    private 'face_set_name'?: string | undefined;
    public faces?: Array<FaceSetFace>;
    public constructor() { 
        super();
    }
    public withFaceSetId(faceSetId: string): AddFacesByBase64Response {
        this['face_set_id'] = faceSetId;
        return this;
    }
    public set faceSetId(faceSetId: string | undefined) {
        this['face_set_id'] = faceSetId;
    }
    public get faceSetId() {
        return this['face_set_id'];
    }
    public withFaceSetName(faceSetName: string): AddFacesByBase64Response {
        this['face_set_name'] = faceSetName;
        return this;
    }
    public set faceSetName(faceSetName: string | undefined) {
        this['face_set_name'] = faceSetName;
    }
    public get faceSetName() {
        return this['face_set_name'];
    }
    public withFaces(faces: Array<FaceSetFace>): AddFacesByBase64Response {
        this['faces'] = faces;
        return this;
    }
}