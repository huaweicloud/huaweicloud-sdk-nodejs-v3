
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSecurityReportLogoResponse extends SdkResponse {
    private 'logo_content'?: string;
    private 'logo_name'?: string;
    public constructor() { 
        super();
    }
    public withLogoContent(logoContent: string): ShowSecurityReportLogoResponse {
        this['logo_content'] = logoContent;
        return this;
    }
    public set logoContent(logoContent: string  | undefined) {
        this['logo_content'] = logoContent;
    }
    public get logoContent(): string | undefined {
        return this['logo_content'];
    }
    public withLogoName(logoName: string): ShowSecurityReportLogoResponse {
        this['logo_name'] = logoName;
        return this;
    }
    public set logoName(logoName: string  | undefined) {
        this['logo_name'] = logoName;
    }
    public get logoName(): string | undefined {
        return this['logo_name'];
    }
}