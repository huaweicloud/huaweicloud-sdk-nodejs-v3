import { FaceSetInfo } from './FaceSetInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFaceSetResponse extends SdkResponse {
    private 'face_set_info'?: FaceSetInfo;
    public constructor() { 
        super();
    }
    public withFaceSetInfo(faceSetInfo: FaceSetInfo): ShowFaceSetResponse {
        this['face_set_info'] = faceSetInfo;
        return this;
    }
    public set faceSetInfo(faceSetInfo: FaceSetInfo  | undefined) {
        this['face_set_info'] = faceSetInfo;
    }
    public get faceSetInfo(): FaceSetInfo | undefined {
        return this['face_set_info'];
    }
}