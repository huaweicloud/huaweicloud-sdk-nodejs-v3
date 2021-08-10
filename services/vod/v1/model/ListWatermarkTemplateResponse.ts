import { WatermarkTemplate } from './WatermarkTemplate';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWatermarkTemplateResponse extends SdkResponse {
    public templates?: Array<WatermarkTemplate>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withTemplates(templates: Array<WatermarkTemplate>): ListWatermarkTemplateResponse {
        this['templates'] = templates;
        return this;
    }
    public withTotal(total: number): ListWatermarkTemplateResponse {
        this['total'] = total;
        return this;
    }
}