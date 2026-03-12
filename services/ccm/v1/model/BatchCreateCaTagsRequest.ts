import { BatchOperateTagRequestBody } from './BatchOperateTagRequestBody';


export class BatchCreateCaTagsRequest {
    private 'ca_id'?: string;
    public body?: BatchOperateTagRequestBody;
    public constructor(caId?: string) { 
        this['ca_id'] = caId;
    }
    public withCaId(caId: string): BatchCreateCaTagsRequest {
        this['ca_id'] = caId;
        return this;
    }
    public set caId(caId: string  | undefined) {
        this['ca_id'] = caId;
    }
    public get caId(): string | undefined {
        return this['ca_id'];
    }
    public withBody(body: BatchOperateTagRequestBody): BatchCreateCaTagsRequest {
        this['body'] = body;
        return this;
    }
}