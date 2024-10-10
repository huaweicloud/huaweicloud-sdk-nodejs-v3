import { UpdateConnectionReq } from './UpdateConnectionReq';


export class ModifyConnectionRequest {
    private 'X-Language'?: string;
    private 'connection_id'?: string;
    public body?: UpdateConnectionReq;
    public constructor(connectionId?: string) { 
        this['connection_id'] = connectionId;
    }
    public withXLanguage(xLanguage: string): ModifyConnectionRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withConnectionId(connectionId: string): ModifyConnectionRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withBody(body: UpdateConnectionReq): ModifyConnectionRequest {
        this['body'] = body;
        return this;
    }
}