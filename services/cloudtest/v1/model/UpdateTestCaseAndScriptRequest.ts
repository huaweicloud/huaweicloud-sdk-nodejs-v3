import { CreateTestCaseReq } from './CreateTestCaseReq';


export class UpdateTestCaseAndScriptRequest {
    private 'project_id'?: string;
    private 'tmss_case_uri'?: string;
    private 'turn_on_awmapping'?: boolean;
    public body?: CreateTestCaseReq;
    public constructor(projectId?: string, tmssCaseUri?: string) { 
        this['project_id'] = projectId;
        this['tmss_case_uri'] = tmssCaseUri;
    }
    public withProjectId(projectId: string): UpdateTestCaseAndScriptRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withTmssCaseUri(tmssCaseUri: string): UpdateTestCaseAndScriptRequest {
        this['tmss_case_uri'] = tmssCaseUri;
        return this;
    }
    public set tmssCaseUri(tmssCaseUri: string  | undefined) {
        this['tmss_case_uri'] = tmssCaseUri;
    }
    public get tmssCaseUri(): string | undefined {
        return this['tmss_case_uri'];
    }
    public withTurnOnAwmapping(turnOnAwmapping: boolean): UpdateTestCaseAndScriptRequest {
        this['turn_on_awmapping'] = turnOnAwmapping;
        return this;
    }
    public set turnOnAwmapping(turnOnAwmapping: boolean  | undefined) {
        this['turn_on_awmapping'] = turnOnAwmapping;
    }
    public get turnOnAwmapping(): boolean | undefined {
        return this['turn_on_awmapping'];
    }
    public withBody(body: CreateTestCaseReq): UpdateTestCaseAndScriptRequest {
        this['body'] = body;
        return this;
    }
}