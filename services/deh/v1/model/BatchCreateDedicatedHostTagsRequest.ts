import { ReqSetOrDeleteTags } from './ReqSetOrDeleteTags';


export class BatchCreateDedicatedHostTagsRequest {
    private 'dedicated_host_id'?: string;
    public body?: ReqSetOrDeleteTags;
    public constructor(dedicatedHostId?: string) { 
        this['dedicated_host_id'] = dedicatedHostId;
    }
    public withDedicatedHostId(dedicatedHostId: string): BatchCreateDedicatedHostTagsRequest {
        this['dedicated_host_id'] = dedicatedHostId;
        return this;
    }
    public set dedicatedHostId(dedicatedHostId: string  | undefined) {
        this['dedicated_host_id'] = dedicatedHostId;
    }
    public get dedicatedHostId(): string | undefined {
        return this['dedicated_host_id'];
    }
    public withBody(body: ReqSetOrDeleteTags): BatchCreateDedicatedHostTagsRequest {
        this['body'] = body;
        return this;
    }
}