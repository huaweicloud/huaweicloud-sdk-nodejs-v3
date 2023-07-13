import { PutDiskInfoReq } from './PutDiskInfoReq';


export class UpdateDiskInfoRequest {
    private 'source_id': string | undefined;
    public body?: PutDiskInfoReq;
    public constructor(sourceId?: any) { 
        this['source_id'] = sourceId;
    }
    public withSourceId(sourceId: string): UpdateDiskInfoRequest {
        this['source_id'] = sourceId;
        return this;
    }
    public set sourceId(sourceId: string | undefined) {
        this['source_id'] = sourceId;
    }
    public get sourceId() {
        return this['source_id'];
    }
    public withBody(body: PutDiskInfoReq): UpdateDiskInfoRequest {
        this['body'] = body;
        return this;
    }
}