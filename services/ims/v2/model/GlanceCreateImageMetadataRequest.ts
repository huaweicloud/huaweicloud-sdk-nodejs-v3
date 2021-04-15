import { GlanceCreateImageMetadataRequestBody } from './GlanceCreateImageMetadataRequestBody';


export class GlanceCreateImageMetadataRequest {
    public body?: GlanceCreateImageMetadataRequestBody;
    public constructor() { 
    }
    public withBody(body: GlanceCreateImageMetadataRequestBody): GlanceCreateImageMetadataRequest {
        this['body'] = body;
        return this;
    }
}