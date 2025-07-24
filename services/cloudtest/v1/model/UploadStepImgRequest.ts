import { UploadStepImgRequestBody } from './UploadStepImgRequestBody';


export class UploadStepImgRequest {
    private 'project_id'?: string;
    public body?: UploadStepImgRequestBody;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): UploadStepImgRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: UploadStepImgRequestBody): UploadStepImgRequest {
        this['body'] = body;
        return this;
    }
}