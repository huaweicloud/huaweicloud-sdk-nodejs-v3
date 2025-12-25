import { CreateCollectConfigV2RequestBody } from './CreateCollectConfigV2RequestBody';


export class CreateCollectConfigRequest {
    private 'region_id'?: string;
    public body?: CreateCollectConfigV2RequestBody;
    public constructor() { 
    }
    public withRegionId(regionId: string): CreateCollectConfigRequest {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withBody(body: CreateCollectConfigV2RequestBody): CreateCollectConfigRequest {
        this['body'] = body;
        return this;
    }
}