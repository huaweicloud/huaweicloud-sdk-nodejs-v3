import { PutSourceServerBody } from './PutSourceServerBody';


export class UpdateServerNameRequest {
    private 'source_id': string | undefined;
    public body?: PutSourceServerBody;
    public constructor(sourceId?: any) { 
        this['source_id'] = sourceId;
    }
    public withSourceId(sourceId: string): UpdateServerNameRequest {
        this['source_id'] = sourceId;
        return this;
    }
    public set sourceId(sourceId: string | undefined) {
        this['source_id'] = sourceId;
    }
    public get sourceId() {
        return this['source_id'];
    }
    public withBody(body: PutSourceServerBody): UpdateServerNameRequest {
        this['body'] = body;
        return this;
    }
}