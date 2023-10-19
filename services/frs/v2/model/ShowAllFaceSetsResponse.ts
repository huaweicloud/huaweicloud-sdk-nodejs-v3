import { FaceSetInfo } from './FaceSetInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAllFaceSetsResponse extends SdkResponse {
    private 'face_sets_info'?: Array<FaceSetInfo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withFaceSetsInfo(faceSetsInfo: Array<FaceSetInfo>): ShowAllFaceSetsResponse {
        this['face_sets_info'] = faceSetsInfo;
        return this;
    }
    public set faceSetsInfo(faceSetsInfo: Array<FaceSetInfo>  | undefined) {
        this['face_sets_info'] = faceSetsInfo;
    }
    public get faceSetsInfo(): Array<FaceSetInfo> | undefined {
        return this['face_sets_info'];
    }
    public withXRequestId(xRequestId: string): ShowAllFaceSetsResponse {
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