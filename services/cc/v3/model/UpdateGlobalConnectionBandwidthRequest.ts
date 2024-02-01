import { UpdateGlobalConnectionBandwidthRequestBody } from './UpdateGlobalConnectionBandwidthRequestBody';


export class UpdateGlobalConnectionBandwidthRequest {
    public id?: string;
    public body?: UpdateGlobalConnectionBandwidthRequestBody;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): UpdateGlobalConnectionBandwidthRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: UpdateGlobalConnectionBandwidthRequestBody): UpdateGlobalConnectionBandwidthRequest {
        this['body'] = body;
        return this;
    }
}