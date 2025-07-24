import { CommRequestListFactorParam } from './CommRequestListFactorParam';


export class ShowFactorByAssetIdRequest {
    private 'project_id'?: string;
    public id?: string;
    public body?: CommRequestListFactorParam;
    public constructor(projectId?: string, id?: string) { 
        this['project_id'] = projectId;
        this['id'] = id;
    }
    public withProjectId(projectId: string): ShowFactorByAssetIdRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withId(id: string): ShowFactorByAssetIdRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: CommRequestListFactorParam): ShowFactorByAssetIdRequest {
        this['body'] = body;
        return this;
    }
}