
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateWatermarkTemplateResponse extends SdkResponse {
    public id?: string;
    private 'upload_url'?: string | undefined;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateWatermarkTemplateResponse {
        this['id'] = id;
        return this;
    }
    public withUploadUrl(uploadUrl: string): CreateWatermarkTemplateResponse {
        this['upload_url'] = uploadUrl;
        return this;
    }
    public set uploadUrl(uploadUrl: string | undefined) {
        this['upload_url'] = uploadUrl;
    }
    public get uploadUrl() {
        return this['upload_url'];
    }
}