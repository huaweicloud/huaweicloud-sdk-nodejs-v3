
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UploadReportLogoResponse extends SdkResponse {
    private 'logo_id'?: string;
    public constructor() { 
        super();
    }
    public withLogoId(logoId: string): UploadReportLogoResponse {
        this['logo_id'] = logoId;
        return this;
    }
    public set logoId(logoId: string  | undefined) {
        this['logo_id'] = logoId;
    }
    public get logoId(): string | undefined {
        return this['logo_id'];
    }
}