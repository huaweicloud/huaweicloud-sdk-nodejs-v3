import { CreateGlobalConnectionBandwidthRequestBody } from './CreateGlobalConnectionBandwidthRequestBody';


export class CreateGlobalConnectionBandwidthRequest {
    public body?: CreateGlobalConnectionBandwidthRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateGlobalConnectionBandwidthRequestBody): CreateGlobalConnectionBandwidthRequest {
        this['body'] = body;
        return this;
    }
}