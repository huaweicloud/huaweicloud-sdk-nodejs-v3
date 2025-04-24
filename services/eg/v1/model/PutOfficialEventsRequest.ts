import { PutEventsReq } from './PutEventsReq';


export class PutOfficialEventsRequest {
    private 'source_name'?: string;
    public body?: PutEventsReq;
    public constructor(sourceName?: string) { 
        this['source_name'] = sourceName;
    }
    public withSourceName(sourceName: string): PutOfficialEventsRequest {
        this['source_name'] = sourceName;
        return this;
    }
    public set sourceName(sourceName: string  | undefined) {
        this['source_name'] = sourceName;
    }
    public get sourceName(): string | undefined {
        return this['source_name'];
    }
    public withBody(body: PutEventsReq): PutOfficialEventsRequest {
        this['body'] = body;
        return this;
    }
}