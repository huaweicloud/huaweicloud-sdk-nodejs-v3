import { ApplyRecord } from './ApplyRecord';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAppliedTemplateRecordResponse extends SdkResponse {
    public total?: number;
    public elements?: Array<ApplyRecord>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ShowAppliedTemplateRecordResponse {
        this['total'] = total;
        return this;
    }
    public withElements(elements: Array<ApplyRecord>): ShowAppliedTemplateRecordResponse {
        this['elements'] = elements;
        return this;
    }
}