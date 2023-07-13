import { WatermarkTemplate } from './WatermarkTemplate';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWatermarkTemplateResponse extends SdkResponse {
    public total?: number;
    public templates?: Array<WatermarkTemplate>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListWatermarkTemplateResponse {
        this['total'] = total;
        return this;
    }
    public withTemplates(templates: Array<WatermarkTemplate>): ListWatermarkTemplateResponse {
        this['templates'] = templates;
        return this;
    }
}