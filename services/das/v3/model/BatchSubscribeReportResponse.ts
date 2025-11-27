
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchSubscribeReportResponse extends SdkResponse {
    private 'success_email_template_ids'?: Array<number>;
    private 'failed_email_template_ids'?: Array<number>;
    public constructor() { 
        super();
    }
    public withSuccessEmailTemplateIds(successEmailTemplateIds: Array<number>): BatchSubscribeReportResponse {
        this['success_email_template_ids'] = successEmailTemplateIds;
        return this;
    }
    public set successEmailTemplateIds(successEmailTemplateIds: Array<number>  | undefined) {
        this['success_email_template_ids'] = successEmailTemplateIds;
    }
    public get successEmailTemplateIds(): Array<number> | undefined {
        return this['success_email_template_ids'];
    }
    public withFailedEmailTemplateIds(failedEmailTemplateIds: Array<number>): BatchSubscribeReportResponse {
        this['failed_email_template_ids'] = failedEmailTemplateIds;
        return this;
    }
    public set failedEmailTemplateIds(failedEmailTemplateIds: Array<number>  | undefined) {
        this['failed_email_template_ids'] = failedEmailTemplateIds;
    }
    public get failedEmailTemplateIds(): Array<number> | undefined {
        return this['failed_email_template_ids'];
    }
}