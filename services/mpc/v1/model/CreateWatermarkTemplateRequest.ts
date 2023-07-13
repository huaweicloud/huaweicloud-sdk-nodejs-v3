import { WatermarkTemplate } from './WatermarkTemplate';


export class CreateWatermarkTemplateRequest {
    public body?: WatermarkTemplate;
    public constructor() { 
    }
    public withBody(body: WatermarkTemplate): CreateWatermarkTemplateRequest {
        this['body'] = body;
        return this;
    }
}