import { ShowWdrSnapshotRequestBody } from './ShowWdrSnapshotRequestBody';


export class ShowWdrSnapshotRequest {
    private 'connection_id'?: string;
    public body?: ShowWdrSnapshotRequestBody;
    public constructor(connectionId?: string) { 
        this['connection_id'] = connectionId;
    }
    public withConnectionId(connectionId: string): ShowWdrSnapshotRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withBody(body: ShowWdrSnapshotRequestBody): ShowWdrSnapshotRequest {
        this['body'] = body;
        return this;
    }
}