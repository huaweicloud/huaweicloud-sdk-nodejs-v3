

export class ExecuteTaskInfo {
    public description?: string;
    private 'release_dev'?: string;
    private 'result_code'?: string;
    private 'test_result_uri'?: string;
    private 'status_code'?: string;
    private 'version_uri'?: string;
    public constructor() { 
    }
    public withDescription(description: string): ExecuteTaskInfo {
        this['description'] = description;
        return this;
    }
    public withReleaseDev(releaseDev: string): ExecuteTaskInfo {
        this['release_dev'] = releaseDev;
        return this;
    }
    public set releaseDev(releaseDev: string  | undefined) {
        this['release_dev'] = releaseDev;
    }
    public get releaseDev(): string | undefined {
        return this['release_dev'];
    }
    public withResultCode(resultCode: string): ExecuteTaskInfo {
        this['result_code'] = resultCode;
        return this;
    }
    public set resultCode(resultCode: string  | undefined) {
        this['result_code'] = resultCode;
    }
    public get resultCode(): string | undefined {
        return this['result_code'];
    }
    public withTestResultUri(testResultUri: string): ExecuteTaskInfo {
        this['test_result_uri'] = testResultUri;
        return this;
    }
    public set testResultUri(testResultUri: string  | undefined) {
        this['test_result_uri'] = testResultUri;
    }
    public get testResultUri(): string | undefined {
        return this['test_result_uri'];
    }
    public withStatusCode(statusCode: string): ExecuteTaskInfo {
        this['status_code'] = statusCode;
        return this;
    }
    public set statusCode(statusCode: string  | undefined) {
        this['status_code'] = statusCode;
    }
    public get statusCode(): string | undefined {
        return this['status_code'];
    }
    public withVersionUri(versionUri: string): ExecuteTaskInfo {
        this['version_uri'] = versionUri;
        return this;
    }
    public set versionUri(versionUri: string  | undefined) {
        this['version_uri'] = versionUri;
    }
    public get versionUri(): string | undefined {
        return this['version_uri'];
    }
}