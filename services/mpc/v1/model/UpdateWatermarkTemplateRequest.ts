import { WatermarkTemplate } from './WatermarkTemplate';


export class UpdateWatermarkTemplateRequest {
    public body?: WatermarkTemplate;
    public constructor() { 
    }
    public withBody(body: WatermarkTemplate): UpdateWatermarkTemplateRequest {
        this['body'] = body;
        return this;
    }
}