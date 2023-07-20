import { BatchCreatePublicipTagsRequestBody } from './BatchCreatePublicipTagsRequestBody';


export class BatchCreatePublicipTagsRequest {
    private 'publicip_id'?: string;
    public body?: BatchCreatePublicipTagsRequestBody;
    public constructor(publicipId?: string) { 
        this['publicip_id'] = publicipId;
    }
    public withPublicipId(publicipId: string): BatchCreatePublicipTagsRequest {
        this['publicip_id'] = publicipId;
        return this;
    }
    public set publicipId(publicipId: string  | undefined) {
        this['publicip_id'] = publicipId;
    }
    public get publicipId(): string | undefined {
        return this['publicip_id'];
    }
    public withBody(body: BatchCreatePublicipTagsRequestBody): BatchCreatePublicipTagsRequest {
        this['body'] = body;
        return this;
    }
}