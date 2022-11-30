import { ChangeProtectStatusRequestBody } from './ChangeProtectStatusRequestBody';


export class ChangeEwProtectStatusRequest {
    private 'project_id': string | undefined;
    public body?: ChangeProtectStatusRequestBody;
    public constructor(projectId?: any) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ChangeEwProtectStatusRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withBody(body: ChangeProtectStatusRequestBody): ChangeEwProtectStatusRequest {
        this['body'] = body;
        return this;
    }
}