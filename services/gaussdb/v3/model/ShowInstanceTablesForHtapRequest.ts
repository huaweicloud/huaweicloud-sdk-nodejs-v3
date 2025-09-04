import { QueryTableRequestV3 } from './QueryTableRequestV3';


export class ShowInstanceTablesForHtapRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    public limit?: string;
    public offset?: string;
    public body?: QueryTableRequestV3;
    public constructor(xLanguage?: string, instanceId?: string) { 
        this['X-Language'] = xLanguage;
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: string): ShowInstanceTablesForHtapRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ShowInstanceTablesForHtapRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withLimit(limit: string): ShowInstanceTablesForHtapRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ShowInstanceTablesForHtapRequest {
        this['offset'] = offset;
        return this;
    }
    public withBody(body: QueryTableRequestV3): ShowInstanceTablesForHtapRequest {
        this['body'] = body;
        return this;
    }
}