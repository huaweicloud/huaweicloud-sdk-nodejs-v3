import { DlsAdmin } from './DlsAdmin';


export class ModifySecurityAdminRequest {
    public workspace?: string;
    public body?: DlsAdmin;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ModifySecurityAdminRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: DlsAdmin): ModifySecurityAdminRequest {
        this['body'] = body;
        return this;
    }
}