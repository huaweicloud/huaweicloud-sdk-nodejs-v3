import { DiagnoseResult } from './DiagnoseResult';


export class HighPermission {
    public result?: DiagnoseResult;
    private 'workspace_admin'?: string;
    private 'security_administrator'?: string;
    public constructor() { 
    }
    public withResult(result: DiagnoseResult): HighPermission {
        this['result'] = result;
        return this;
    }
    public withWorkspaceAdmin(workspaceAdmin: string): HighPermission {
        this['workspace_admin'] = workspaceAdmin;
        return this;
    }
    public set workspaceAdmin(workspaceAdmin: string  | undefined) {
        this['workspace_admin'] = workspaceAdmin;
    }
    public get workspaceAdmin(): string | undefined {
        return this['workspace_admin'];
    }
    public withSecurityAdministrator(securityAdministrator: string): HighPermission {
        this['security_administrator'] = securityAdministrator;
        return this;
    }
    public set securityAdministrator(securityAdministrator: string  | undefined) {
        this['security_administrator'] = securityAdministrator;
    }
    public get securityAdministrator(): string | undefined {
        return this['security_administrator'];
    }
}