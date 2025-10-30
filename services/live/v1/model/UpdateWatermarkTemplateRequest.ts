import { WatermarkTemplate } from './WatermarkTemplate';


export class UpdateWatermarkTemplateRequest {
    public id?: string;
    public body?: WatermarkTemplate;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): UpdateWatermarkTemplateRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: WatermarkTemplate): UpdateWatermarkTemplateRequest {
        this['body'] = body;
        return this;
    }
}