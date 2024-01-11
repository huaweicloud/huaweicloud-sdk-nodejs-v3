import { ImportBackupReq } from './ImportBackupReq';


export class ImportBackup2Request {
    private 'graph_id'?: string;
    public body?: ImportBackupReq;
    public constructor(graphId?: string) { 
        this['graph_id'] = graphId;
    }
    public withGraphId(graphId: string): ImportBackup2Request {
        this['graph_id'] = graphId;
        return this;
    }
    public set graphId(graphId: string  | undefined) {
        this['graph_id'] = graphId;
    }
    public get graphId(): string | undefined {
        return this['graph_id'];
    }
    public withBody(body: ImportBackupReq): ImportBackup2Request {
        this['body'] = body;
        return this;
    }
}