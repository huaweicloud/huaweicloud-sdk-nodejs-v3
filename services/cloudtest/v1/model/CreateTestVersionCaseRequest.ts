import { TestCaseInfo } from './TestCaseInfo';


export class CreateTestVersionCaseRequest {
    private 'version_uri'?: string;
    public body?: TestCaseInfo;
    public constructor(versionUri?: string) { 
        this['version_uri'] = versionUri;
    }
    public withVersionUri(versionUri: string): CreateTestVersionCaseRequest {
        this['version_uri'] = versionUri;
        return this;
    }
    public set versionUri(versionUri: string  | undefined) {
        this['version_uri'] = versionUri;
    }
    public get versionUri(): string | undefined {
        return this['version_uri'];
    }
    public withBody(body: TestCaseInfo): CreateTestVersionCaseRequest {
        this['body'] = body;
        return this;
    }
}