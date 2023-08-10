
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteAlarmTemplatesResponse extends SdkResponse {
    private 'template_ids'?: Array<string>;
    public constructor() { 
        super();
    }
    public withTemplateIds(templateIds: Array<string>): BatchDeleteAlarmTemplatesResponse {
        this['template_ids'] = templateIds;
        return this;
    }
    public set templateIds(templateIds: Array<string>  | undefined) {
        this['template_ids'] = templateIds;
    }
    public get templateIds(): Array<string> | undefined {
        return this['template_ids'];
    }
}