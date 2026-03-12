import { BatchOperateTagRequestBody } from './BatchOperateTagRequestBody';


export class BatchDeleteCaTagsRequest {
    private 'ca_id'?: string;
    public body?: BatchOperateTagRequestBody;
    public constructor(caId?: string) { 
        this['ca_id'] = caId;
    }
    public withCaId(caId: string): BatchDeleteCaTagsRequest {
        this['ca_id'] = caId;
        return this;
    }
    public set caId(caId: string  | undefined) {
        this['ca_id'] = caId;
    }
    public get caId(): string | undefined {
        return this['ca_id'];
    }
    public withBody(body: BatchOperateTagRequestBody): BatchDeleteCaTagsRequest {
        this['body'] = body;
        return this;
    }
}