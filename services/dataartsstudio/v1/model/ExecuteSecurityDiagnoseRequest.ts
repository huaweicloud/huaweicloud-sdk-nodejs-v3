import { DiagnoseTypeDTO } from './DiagnoseTypeDTO';


export class ExecuteSecurityDiagnoseRequest {
    public workspace?: string;
    public body?: DiagnoseTypeDTO;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ExecuteSecurityDiagnoseRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: DiagnoseTypeDTO): ExecuteSecurityDiagnoseRequest {
        this['body'] = body;
        return this;
    }
}