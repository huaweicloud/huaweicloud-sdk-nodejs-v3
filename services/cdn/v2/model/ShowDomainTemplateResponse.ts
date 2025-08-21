import { TemplateItem } from './TemplateItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDomainTemplateResponse extends SdkResponse {
    public total?: number;
    public temlates?: Array<TemplateItem>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ShowDomainTemplateResponse {
        this['total'] = total;
        return this;
    }
    public withTemlates(temlates: Array<TemplateItem>): ShowDomainTemplateResponse {
        this['temlates'] = temlates;
        return this;
    }
}