import { EipOperateProtectReq } from './EipOperateProtectReq';


export class ChangeProtectEipRequest {
    private 'project_id': string | undefined;
    public body?: EipOperateProtectReq;
    public constructor(projectId?: any) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ChangeProtectEipRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withBody(body: EipOperateProtectReq): ChangeProtectEipRequest {
        this['body'] = body;
        return this;
    }
}