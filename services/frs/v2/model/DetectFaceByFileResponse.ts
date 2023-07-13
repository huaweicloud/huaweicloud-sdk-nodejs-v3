import { DetectFace } from './DetectFace';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DetectFaceByFileResponse extends SdkResponse {
    public faces?: Array<DetectFace>;
    public constructor() { 
        super();
    }
    public withFaces(faces: Array<DetectFace>): DetectFaceByFileResponse {
        this['faces'] = faces;
        return this;
    }
}