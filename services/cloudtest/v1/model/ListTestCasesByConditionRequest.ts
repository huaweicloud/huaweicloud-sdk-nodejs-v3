import { TestCasesListQueryInfo } from './TestCasesListQueryInfo';


export class ListTestCasesByConditionRequest {
    private 'project_uuid'?: string;
    public body?: TestCasesListQueryInfo;
    public constructor(projectUuid?: string) { 
        this['project_uuid'] = projectUuid;
    }
    public withProjectUuid(projectUuid: string): ListTestCasesByConditionRequest {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
    public withBody(body: TestCasesListQueryInfo): ListTestCasesByConditionRequest {
        this['body'] = body;
        return this;
    }
}