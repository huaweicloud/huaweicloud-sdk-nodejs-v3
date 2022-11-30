import { IpsProtectDTO } from './IpsProtectDTO';


export class ChangeIpsProtectModeUsingPostRequest {
    private 'project_id': string | undefined;
    public body?: IpsProtectDTO;
    public constructor(projectId?: any) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ChangeIpsProtectModeUsingPostRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withBody(body: IpsProtectDTO): ChangeIpsProtectModeUsingPostRequest {
        this['body'] = body;
        return this;
    }
}