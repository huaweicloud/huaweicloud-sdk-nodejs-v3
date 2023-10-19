import { FaceSetFace } from './FaceSetFace';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddFacesByFileResponse extends SdkResponse {
    private 'face_set_id'?: string;
    private 'face_set_name'?: string;
    public faces?: Array<FaceSetFace>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withFaceSetId(faceSetId: string): AddFacesByFileResponse {
        this['face_set_id'] = faceSetId;
        return this;
    }
    public set faceSetId(faceSetId: string  | undefined) {
        this['face_set_id'] = faceSetId;
    }
    public get faceSetId(): string | undefined {
        return this['face_set_id'];
    }
    public withFaceSetName(faceSetName: string): AddFacesByFileResponse {
        this['face_set_name'] = faceSetName;
        return this;
    }
    public set faceSetName(faceSetName: string  | undefined) {
        this['face_set_name'] = faceSetName;
    }
    public get faceSetName(): string | undefined {
        return this['face_set_name'];
    }
    public withFaces(faces: Array<FaceSetFace>): AddFacesByFileResponse {
        this['faces'] = faces;
        return this;
    }
    public withXRequestId(xRequestId: string): AddFacesByFileResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}