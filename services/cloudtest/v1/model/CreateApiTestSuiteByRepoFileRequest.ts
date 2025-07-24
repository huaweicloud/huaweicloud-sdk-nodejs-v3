import { CreateTestSuitByRepoFileInfo } from './CreateTestSuitByRepoFileInfo';


export class CreateApiTestSuiteByRepoFileRequest {
    private 'project_id'?: string;
    public body?: CreateTestSuitByRepoFileInfo;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): CreateApiTestSuiteByRepoFileRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: CreateTestSuitByRepoFileInfo): CreateApiTestSuiteByRepoFileRequest {
        this['body'] = body;
        return this;
    }
}