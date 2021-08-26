import { FaceSetInfo } from './FaceSetInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAllFaceSetsResponse extends SdkResponse {
    private 'face_sets_info'?: Array<FaceSetInfo> | undefined;
    public constructor() { 
        super();
    }
    public withFaceSetsInfo(faceSetsInfo: Array<FaceSetInfo>): ShowAllFaceSetsResponse {
        this['face_sets_info'] = faceSetsInfo;
        return this;
    }
    public set faceSetsInfo(faceSetsInfo: Array<FaceSetInfo> | undefined) {
        this['face_sets_info'] = faceSetsInfo;
    }
    public get faceSetsInfo() {
        return this['face_sets_info'];
    }
}