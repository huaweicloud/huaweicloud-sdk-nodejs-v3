import { IpsSwitchDTO } from './IpsSwitchDTO';


export class ChangeIpsSwitchUsingPostRequest {
    private 'project_id': string | undefined;
    public body?: IpsSwitchDTO;
    public constructor(projectId?: any) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ChangeIpsSwitchUsingPostRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withBody(body: IpsSwitchDTO): ChangeIpsSwitchUsingPostRequest {
        this['body'] = body;
        return this;
    }
}