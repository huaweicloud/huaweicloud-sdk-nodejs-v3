
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteFaceSetResponse extends SdkResponse {
    private 'face_set_name'?: string | undefined;
    public constructor() { 
        super();
    }
    public withFaceSetName(faceSetName: string): DeleteFaceSetResponse {
        this['face_set_name'] = faceSetName;
        return this;
    }
    public set faceSetName(faceSetName: string | undefined) {
        this['face_set_name'] = faceSetName;
    }
    public get faceSetName() {
        return this['face_set_name'];
    }
}