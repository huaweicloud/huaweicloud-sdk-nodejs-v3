import { FaceSetInfo } from './FaceSetInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateFaceSetResponse extends SdkResponse {
    private 'face_set_info'?: FaceSetInfo;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withFaceSetInfo(faceSetInfo: FaceSetInfo): CreateFaceSetResponse {
        this['face_set_info'] = faceSetInfo;
        return this;
    }
    public set faceSetInfo(faceSetInfo: FaceSetInfo  | undefined) {
        this['face_set_info'] = faceSetInfo;
    }
    public get faceSetInfo(): FaceSetInfo | undefined {
        return this['face_set_info'];
    }
    public withXRequestId(xRequestId: string): CreateFaceSetResponse {
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