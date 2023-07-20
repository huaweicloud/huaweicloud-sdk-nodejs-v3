
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateFaceResponse extends SdkResponse {
    private 'face_number'?: number;
    private 'face_set_id'?: string;
    private 'face_set_name'?: string;
    public constructor() { 
        super();
    }
    public withFaceNumber(faceNumber: number): UpdateFaceResponse {
        this['face_number'] = faceNumber;
        return this;
    }
    public set faceNumber(faceNumber: number  | undefined) {
        this['face_number'] = faceNumber;
    }
    public get faceNumber(): number | undefined {
        return this['face_number'];
    }
    public withFaceSetId(faceSetId: string): UpdateFaceResponse {
        this['face_set_id'] = faceSetId;
        return this;
    }
    public set faceSetId(faceSetId: string  | undefined) {
        this['face_set_id'] = faceSetId;
    }
    public get faceSetId(): string | undefined {
        return this['face_set_id'];
    }
    public withFaceSetName(faceSetName: string): UpdateFaceResponse {
        this['face_set_name'] = faceSetName;
        return this;
    }
    public set faceSetName(faceSetName: string  | undefined) {
        this['face_set_name'] = faceSetName;
    }
    public get faceSetName(): string | undefined {
        return this['face_set_name'];
    }
}