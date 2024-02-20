
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAccessPreviewResponse extends SdkResponse {
    private 'access_preview_id'?: string;
    public constructor() { 
        super();
    }
    public withAccessPreviewId(accessPreviewId: string): CreateAccessPreviewResponse {
        this['access_preview_id'] = accessPreviewId;
        return this;
    }
    public set accessPreviewId(accessPreviewId: string  | undefined) {
        this['access_preview_id'] = accessPreviewId;
    }
    public get accessPreviewId(): string | undefined {
        return this['access_preview_id'];
    }
}