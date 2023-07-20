import { UpdateHostMassageReq } from './UpdateHostMassageReq';


export class UpdateHostMassageRequest {
    private 'connection_id'?: string;
    public body?: UpdateHostMassageReq;
    public constructor(connectionId?: string) { 
        this['connection_id'] = connectionId;
    }
    public withConnectionId(connectionId: string): UpdateHostMassageRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withBody(body: UpdateHostMassageReq): UpdateHostMassageRequest {
        this['body'] = body;
        return this;
    }
}