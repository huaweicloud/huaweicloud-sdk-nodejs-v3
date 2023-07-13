import { PutCopyStateReq } from './PutCopyStateReq';


export class UpdateCopyStateRequest {
    private 'source_id': string | undefined;
    public body?: PutCopyStateReq;
    public constructor(sourceId?: any) { 
        this['source_id'] = sourceId;
    }
    public withSourceId(sourceId: string): UpdateCopyStateRequest {
        this['source_id'] = sourceId;
        return this;
    }
    public set sourceId(sourceId: string | undefined) {
        this['source_id'] = sourceId;
    }
    public get sourceId() {
        return this['source_id'];
    }
    public withBody(body: PutCopyStateReq): UpdateCopyStateRequest {
        this['body'] = body;
        return this;
    }
}