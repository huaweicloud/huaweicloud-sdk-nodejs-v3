import { FgacUpdateReq } from './FgacUpdateReq';


export class BatchUpdateSecurityDlfDataWareHousesRequest {
    public workspace?: string;
    public body?: FgacUpdateReq;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): BatchUpdateSecurityDlfDataWareHousesRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: FgacUpdateReq): BatchUpdateSecurityDlfDataWareHousesRequest {
        this['body'] = body;
        return this;
    }
}