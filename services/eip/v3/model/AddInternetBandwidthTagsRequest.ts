import { CreateV2TagRequestBody } from './CreateV2TagRequestBody';


export class AddInternetBandwidthTagsRequest {
    private 'resource_id'?: string;
    public body?: CreateV2TagRequestBody;
    public constructor(resourceId?: string) { 
        this['resource_id'] = resourceId;
    }
    public withResourceId(resourceId: string): AddInternetBandwidthTagsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withBody(body: CreateV2TagRequestBody): AddInternetBandwidthTagsRequest {
        this['body'] = body;
        return this;
    }
}