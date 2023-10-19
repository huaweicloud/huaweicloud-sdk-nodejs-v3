
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteFaceSetResponse extends SdkResponse {
    private 'face_set_name'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withFaceSetName(faceSetName: string): DeleteFaceSetResponse {
        this['face_set_name'] = faceSetName;
        return this;
    }
    public set faceSetName(faceSetName: string  | undefined) {
        this['face_set_name'] = faceSetName;
    }
    public get faceSetName(): string | undefined {
        return this['face_set_name'];
    }
    public withXRequestId(xRequestId: string): DeleteFaceSetResponse {
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