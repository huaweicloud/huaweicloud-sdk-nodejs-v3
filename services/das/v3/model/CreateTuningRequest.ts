import { CreateTuningReq } from './CreateTuningReq';


export class CreateTuningRequest {
    private 'connection_id'?: string;
    private 'X-Language'?: string;
    public body?: CreateTuningReq;
    public constructor(connectionId?: string) { 
        this['connection_id'] = connectionId;
    }
    public withConnectionId(connectionId: string): CreateTuningRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withXLanguage(xLanguage: string): CreateTuningRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: CreateTuningReq): CreateTuningRequest {
        this['body'] = body;
        return this;
    }
}