import { BatchDeletePublicipTagsRequestBody } from './BatchDeletePublicipTagsRequestBody';


export class BatchDeletePublicipTagsRequest {
    private 'publicip_id'?: string;
    public body?: BatchDeletePublicipTagsRequestBody;
    public constructor(publicipId?: string) { 
        this['publicip_id'] = publicipId;
    }
    public withPublicipId(publicipId: string): BatchDeletePublicipTagsRequest {
        this['publicip_id'] = publicipId;
        return this;
    }
    public set publicipId(publicipId: string  | undefined) {
        this['publicip_id'] = publicipId;
    }
    public get publicipId(): string | undefined {
        return this['publicip_id'];
    }
    public withBody(body: BatchDeletePublicipTagsRequestBody): BatchDeletePublicipTagsRequest {
        this['body'] = body;
        return this;
    }
}