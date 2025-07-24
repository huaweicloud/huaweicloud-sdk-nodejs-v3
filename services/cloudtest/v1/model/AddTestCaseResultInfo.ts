import { TestCaseStepResultInfo } from './TestCaseStepResultInfo';


export class AddTestCaseResultInfo {
    public uri?: string;
    public name?: string;
    public description?: string;
    public result?: string;
    public status?: string;
    public preparation?: string;
    public steps?: Array<TestCaseStepResultInfo>;
    private 'release_dev'?: string;
    private 'task_uri'?: string;
    private 'task_result_uri'?: string;
    public constructor() { 
    }
    public withUri(uri: string): AddTestCaseResultInfo {
        this['uri'] = uri;
        return this;
    }
    public withName(name: string): AddTestCaseResultInfo {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): AddTestCaseResultInfo {
        this['description'] = description;
        return this;
    }
    public withResult(result: string): AddTestCaseResultInfo {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): AddTestCaseResultInfo {
        this['status'] = status;
        return this;
    }
    public withPreparation(preparation: string): AddTestCaseResultInfo {
        this['preparation'] = preparation;
        return this;
    }
    public withSteps(steps: Array<TestCaseStepResultInfo>): AddTestCaseResultInfo {
        this['steps'] = steps;
        return this;
    }
    public withReleaseDev(releaseDev: string): AddTestCaseResultInfo {
        this['release_dev'] = releaseDev;
        return this;
    }
    public set releaseDev(releaseDev: string  | undefined) {
        this['release_dev'] = releaseDev;
    }
    public get releaseDev(): string | undefined {
        return this['release_dev'];
    }
    public withTaskUri(taskUri: string): AddTestCaseResultInfo {
        this['task_uri'] = taskUri;
        return this;
    }
    public set taskUri(taskUri: string  | undefined) {
        this['task_uri'] = taskUri;
    }
    public get taskUri(): string | undefined {
        return this['task_uri'];
    }
    public withTaskResultUri(taskResultUri: string): AddTestCaseResultInfo {
        this['task_result_uri'] = taskResultUri;
        return this;
    }
    public set taskResultUri(taskResultUri: string  | undefined) {
        this['task_result_uri'] = taskResultUri;
    }
    public get taskResultUri(): string | undefined {
        return this['task_result_uri'];
    }
}