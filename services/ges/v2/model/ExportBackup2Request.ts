import { ExportBackupReq } from './ExportBackupReq';


export class ExportBackup2Request {
    private 'graph_id'?: string;
    public body?: ExportBackupReq;
    public constructor(graphId?: string) { 
        this['graph_id'] = graphId;
    }
    public withGraphId(graphId: string): ExportBackup2Request {
        this['graph_id'] = graphId;
        return this;
    }
    public set graphId(graphId: string  | undefined) {
        this['graph_id'] = graphId;
    }
    public get graphId(): string | undefined {
        return this['graph_id'];
    }
    public withBody(body: ExportBackupReq): ExportBackup2Request {
        this['body'] = body;
        return this;
    }
}