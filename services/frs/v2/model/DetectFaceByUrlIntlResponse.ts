import { DetectFace } from './DetectFace';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DetectFaceByUrlIntlResponse extends SdkResponse {
    public faces?: Array<DetectFace>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withFaces(faces: Array<DetectFace>): DetectFaceByUrlIntlResponse {
        this['faces'] = faces;
        return this;
    }
    public withXRequestId(xRequestId: string): DetectFaceByUrlIntlResponse {
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