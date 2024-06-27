import { BatchCreatePortTagsRequestBody } from './BatchCreatePortTagsRequestBody';


export class BatchCreatePortTagsRequest {
    private 'port_id'?: string;
    public body?: BatchCreatePortTagsRequestBody;
    public constructor(portId?: string) { 
        this['port_id'] = portId;
    }
    public withPortId(portId: string): BatchCreatePortTagsRequest {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string  | undefined) {
        this['port_id'] = portId;
    }
    public get portId(): string | undefined {
        return this['port_id'];
    }
    public withBody(body: BatchCreatePortTagsRequestBody): BatchCreatePortTagsRequest {
        this['body'] = body;
        return this;
    }
}