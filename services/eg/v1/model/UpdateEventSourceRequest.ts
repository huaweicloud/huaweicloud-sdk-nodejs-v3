import { CustomizeSourceUpdateReq } from './CustomizeSourceUpdateReq';


export class UpdateEventSourceRequest {
    private 'source_id'?: string;
    public body?: CustomizeSourceUpdateReq;
    public constructor(sourceId?: string) { 
        this['source_id'] = sourceId;
    }
    public withSourceId(sourceId: string): UpdateEventSourceRequest {
        this['source_id'] = sourceId;
        return this;
    }
    public set sourceId(sourceId: string  | undefined) {
        this['source_id'] = sourceId;
    }
    public get sourceId(): string | undefined {
        return this['source_id'];
    }
    public withBody(body: CustomizeSourceUpdateReq): UpdateEventSourceRequest {
        this['body'] = body;
        return this;
    }
}