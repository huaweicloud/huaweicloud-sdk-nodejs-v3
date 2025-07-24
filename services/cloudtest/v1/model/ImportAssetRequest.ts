import { ImportAssetRequestBody } from './ImportAssetRequestBody';


export class ImportAssetRequest {
    private 'project_id'?: string;
    public body?: ImportAssetRequestBody;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ImportAssetRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: ImportAssetRequestBody): ImportAssetRequest {
        this['body'] = body;
        return this;
    }
}