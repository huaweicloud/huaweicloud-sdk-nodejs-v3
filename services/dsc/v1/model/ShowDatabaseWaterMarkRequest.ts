import { ExtractedDatabaseWatermark } from './ExtractedDatabaseWatermark';


export class ShowDatabaseWaterMarkRequest {
    public body?: ExtractedDatabaseWatermark;
    public constructor() { 
    }
    public withBody(body: ExtractedDatabaseWatermark): ShowDatabaseWaterMarkRequest {
        this['body'] = body;
        return this;
    }
}