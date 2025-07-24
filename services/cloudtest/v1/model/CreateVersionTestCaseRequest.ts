import { TestCaseInfo } from './TestCaseInfo';


export class CreateVersionTestCaseRequest {
    private 'version_id'?: string;
    public body?: TestCaseInfo;
    public constructor(versionId?: string) { 
        this['version_id'] = versionId;
    }
    public withVersionId(versionId: string): CreateVersionTestCaseRequest {
        this['version_id'] = versionId;
        return this;
    }
    public set versionId(versionId: string  | undefined) {
        this['version_id'] = versionId;
    }
    public get versionId(): string | undefined {
        return this['version_id'];
    }
    public withBody(body: TestCaseInfo): CreateVersionTestCaseRequest {
        this['body'] = body;
        return this;
    }
}