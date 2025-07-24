import { TestcasePlanQueryParam } from './TestcasePlanQueryParam';


export class ListTestcasePlansRequest {
    private 'project_uuid'?: string;
    private 'branch_uri'?: string;
    public body?: TestcasePlanQueryParam;
    public constructor(projectUuid?: string, branchUri?: string) { 
        this['project_uuid'] = projectUuid;
        this['branch_uri'] = branchUri;
    }
    public withProjectUuid(projectUuid: string): ListTestcasePlansRequest {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
    public withBranchUri(branchUri: string): ListTestcasePlansRequest {
        this['branch_uri'] = branchUri;
        return this;
    }
    public set branchUri(branchUri: string  | undefined) {
        this['branch_uri'] = branchUri;
    }
    public get branchUri(): string | undefined {
        return this['branch_uri'];
    }
    public withBody(body: TestcasePlanQueryParam): ListTestcasePlansRequest {
        this['body'] = body;
        return this;
    }
}