import { BatchDeletePortTagsRequestBody } from './BatchDeletePortTagsRequestBody';


export class BatchDeletePortTagsRequest {
    private 'port_id'?: string;
    public body?: BatchDeletePortTagsRequestBody;
    public constructor(portId?: string) { 
        this['port_id'] = portId;
    }
    public withPortId(portId: string): BatchDeletePortTagsRequest {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string  | undefined) {
        this['port_id'] = portId;
    }
    public get portId(): string | undefined {
        return this['port_id'];
    }
    public withBody(body: BatchDeletePortTagsRequestBody): BatchDeletePortTagsRequest {
        this['body'] = body;
        return this;
    }
}