import { WatermarkTemplate } from './WatermarkTemplate';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWatermarkTemplateResponse extends SdkResponse {
    public total?: number;
    private 'template_infos'?: Array<WatermarkTemplate>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListWatermarkTemplateResponse {
        this['total'] = total;
        return this;
    }
    public withTemplateInfos(templateInfos: Array<WatermarkTemplate>): ListWatermarkTemplateResponse {
        this['template_infos'] = templateInfos;
        return this;
    }
    public set templateInfos(templateInfos: Array<WatermarkTemplate>  | undefined) {
        this['template_infos'] = templateInfos;
    }
    public get templateInfos(): Array<WatermarkTemplate> | undefined {
        return this['template_infos'];
    }
    public withXRequestId(xRequestId: string): ListWatermarkTemplateResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}