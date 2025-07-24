import { CommRequestUpdateAssetTreeParam } from './CommRequestUpdateAssetTreeParam';


export class UpdateAssetTreeRequest {
    private 'project_id'?: string;
    public body?: CommRequestUpdateAssetTreeParam;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): UpdateAssetTreeRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: CommRequestUpdateAssetTreeParam): UpdateAssetTreeRequest {
        this['body'] = body;
        return this;
    }
}