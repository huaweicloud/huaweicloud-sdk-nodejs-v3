import { RiskBackupTemplateBean } from './RiskBackupTemplateBean';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAuditBackupRiskTemplatesResponse extends SdkResponse {
    public templates?: Array<RiskBackupTemplateBean>;
    public constructor() { 
        super();
    }
    public withTemplates(templates: Array<RiskBackupTemplateBean>): ListAuditBackupRiskTemplatesResponse {
        this['templates'] = templates;
        return this;
    }
}