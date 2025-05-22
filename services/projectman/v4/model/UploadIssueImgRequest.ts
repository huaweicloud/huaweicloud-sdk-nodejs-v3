import { UploadIssueImgRequestBody } from './UploadIssueImgRequestBody';


export class UploadIssueImgRequest {
    private 'project_id'?: string;
    public body?: UploadIssueImgRequestBody;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): UploadIssueImgRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: UploadIssueImgRequestBody): UploadIssueImgRequest {
        this['body'] = body;
        return this;
    }
}