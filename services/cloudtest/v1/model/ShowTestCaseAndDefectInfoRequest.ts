import { ShowTestCaseAndDefectInfoRequestBody } from './ShowTestCaseAndDefectInfoRequestBody';


export class ShowTestCaseAndDefectInfoRequest {
    private 'project_id'?: string;
    public body?: ShowTestCaseAndDefectInfoRequestBody;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ShowTestCaseAndDefectInfoRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: ShowTestCaseAndDefectInfoRequestBody): ShowTestCaseAndDefectInfoRequest {
        this['body'] = body;
        return this;
    }
}