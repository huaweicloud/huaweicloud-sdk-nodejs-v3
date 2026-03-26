import { BatchAddTestCaseResultInTaskInfo } from './BatchAddTestCaseResultInTaskInfo';


export class BatchAddCaseResultInTaskRequest {
    private 'project_id'?: string;
    private 'version_uri'?: string;
    public body?: BatchAddTestCaseResultInTaskInfo;
    public constructor(projectId?: string, versionUri?: string) { 
        this['project_id'] = projectId;
        this['version_uri'] = versionUri;
    }
    public withProjectId(projectId: string): BatchAddCaseResultInTaskRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withVersionUri(versionUri: string): BatchAddCaseResultInTaskRequest {
        this['version_uri'] = versionUri;
        return this;
    }
    public set versionUri(versionUri: string  | undefined) {
        this['version_uri'] = versionUri;
    }
    public get versionUri(): string | undefined {
        return this['version_uri'];
    }
    public withBody(body: BatchAddTestCaseResultInTaskInfo): BatchAddCaseResultInTaskRequest {
        this['body'] = body;
        return this;
    }
}