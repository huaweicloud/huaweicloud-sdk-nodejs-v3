import { DetectFace } from './DetectFace';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DetectFaceByFileIntlResponse extends SdkResponse {
    public faces?: Array<DetectFace>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withFaces(faces: Array<DetectFace>): DetectFaceByFileIntlResponse {
        this['faces'] = faces;
        return this;
    }
    public withXRequestId(xRequestId: string): DetectFaceByFileIntlResponse {
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