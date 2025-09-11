import { OverwriteResultResp } from './OverwriteResultResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAlarmTemplateResponse extends SdkResponse {
    private 'template_id'?: string;
    private 'overwrite_result'?: OverwriteResultResp;
    public constructor() { 
        super();
    }
    public withTemplateId(templateId: string): CreateAlarmTemplateResponse {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withOverwriteResult(overwriteResult: OverwriteResultResp): CreateAlarmTemplateResponse {
        this['overwrite_result'] = overwriteResult;
        return this;
    }
    public set overwriteResult(overwriteResult: OverwriteResultResp  | undefined) {
        this['overwrite_result'] = overwriteResult;
    }
    public get overwriteResult(): OverwriteResultResp | undefined {
        return this['overwrite_result'];
    }
}