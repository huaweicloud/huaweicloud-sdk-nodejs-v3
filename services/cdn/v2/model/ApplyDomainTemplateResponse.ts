import { ApplyTmlDetail } from './ApplyTmlDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ApplyDomainTemplateResponse extends SdkResponse {
    public id?: string;
    public status?: string;
    public detail?: Array<ApplyTmlDetail>;
    public constructor() { 
        super();
    }
    public withId(id: string): ApplyDomainTemplateResponse {
        this['id'] = id;
        return this;
    }
    public withStatus(status: string): ApplyDomainTemplateResponse {
        this['status'] = status;
        return this;
    }
    public withDetail(detail: Array<ApplyTmlDetail>): ApplyDomainTemplateResponse {
        this['detail'] = detail;
        return this;
    }
}