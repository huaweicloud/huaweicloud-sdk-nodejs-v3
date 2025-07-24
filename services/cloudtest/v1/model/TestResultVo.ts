import { ResultStepVo } from './ResultStepVo';


export class TestResultVo {
    public uri?: string;
    public name?: string;
    public author?: string;
    public rank?: number;
    public result?: number;
    public round?: number;
    public preparation?: string;
    public description?: string;
    public region?: string;
    public steps?: Array<ResultStepVo>;
    private 'number'?: string;
    private 'author_name'?: string;
    private 'begin_time'?: Date;
    private 'begin_time_timestamp'?: number;
    private 'end_time'?: Date;
    private 'end_time_timestamp'?: number;
    private 'creation_date'?: string;
    private 'creation_date_timestamp'?: number;
    private 'last_modified'?: Date;
    private 'last_modified_timestamp'?: number;
    private 'last_change_time'?: Date;
    private 'last_change_time_timestamp'?: number;
    private 'dfx_test_result'?: string;
    private 'failure_cause'?: string;
    private 'parent_uri'?: string;
    private 'test_case_uri'?: string;
    private 'test_case_name'?: string;
    private 'task_uri'?: string;
    private 'result_name'?: string;
    private 'test_result_ae'?: string;
    private 'executor_id'?: string;
    private 'executor_name'?: string;
    private 'task_id'?: string;
    private 'execute_id'?: string;
    private 'time_cost'?: number;
    private 'step_txt'?: string;
    private 'step_expect'?: string;
    private 'step_actual'?: string;
    private 'step_result'?: string;
    private 'release_dev'?: string;
    private 'creation_version_uri'?: string;
    private 'version_uri'?: string;
    private 'project_id'?: string;
    private 'report_url'?: string;
    private 'test_case_number'?: string;
    private 'service_type'?: string;
    public constructor() { 
    }
    public withUri(uri: string): TestResultVo {
        this['uri'] = uri;
        return this;
    }
    public withName(name: string): TestResultVo {
        this['name'] = name;
        return this;
    }
    public withAuthor(author: string): TestResultVo {
        this['author'] = author;
        return this;
    }
    public withRank(rank: number): TestResultVo {
        this['rank'] = rank;
        return this;
    }
    public withResult(result: number): TestResultVo {
        this['result'] = result;
        return this;
    }
    public withRound(round: number): TestResultVo {
        this['round'] = round;
        return this;
    }
    public withPreparation(preparation: string): TestResultVo {
        this['preparation'] = preparation;
        return this;
    }
    public withDescription(description: string): TestResultVo {
        this['description'] = description;
        return this;
    }
    public withRegion(region: string): TestResultVo {
        this['region'] = region;
        return this;
    }
    public withSteps(steps: Array<ResultStepVo>): TestResultVo {
        this['steps'] = steps;
        return this;
    }
    public withModelNumber(modelNumber: string): TestResultVo {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): string | undefined {
        return this['number'];
    }
    public withAuthorName(authorName: string): TestResultVo {
        this['author_name'] = authorName;
        return this;
    }
    public set authorName(authorName: string  | undefined) {
        this['author_name'] = authorName;
    }
    public get authorName(): string | undefined {
        return this['author_name'];
    }
    public withBeginTime(beginTime: Date): TestResultVo {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: Date  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): Date | undefined {
        return this['begin_time'];
    }
    public withBeginTimeTimestamp(beginTimeTimestamp: number): TestResultVo {
        this['begin_time_timestamp'] = beginTimeTimestamp;
        return this;
    }
    public set beginTimeTimestamp(beginTimeTimestamp: number  | undefined) {
        this['begin_time_timestamp'] = beginTimeTimestamp;
    }
    public get beginTimeTimestamp(): number | undefined {
        return this['begin_time_timestamp'];
    }
    public withEndTime(endTime: Date): TestResultVo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: Date  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): Date | undefined {
        return this['end_time'];
    }
    public withEndTimeTimestamp(endTimeTimestamp: number): TestResultVo {
        this['end_time_timestamp'] = endTimeTimestamp;
        return this;
    }
    public set endTimeTimestamp(endTimeTimestamp: number  | undefined) {
        this['end_time_timestamp'] = endTimeTimestamp;
    }
    public get endTimeTimestamp(): number | undefined {
        return this['end_time_timestamp'];
    }
    public withCreationDate(creationDate: string): TestResultVo {
        this['creation_date'] = creationDate;
        return this;
    }
    public set creationDate(creationDate: string  | undefined) {
        this['creation_date'] = creationDate;
    }
    public get creationDate(): string | undefined {
        return this['creation_date'];
    }
    public withCreationDateTimestamp(creationDateTimestamp: number): TestResultVo {
        this['creation_date_timestamp'] = creationDateTimestamp;
        return this;
    }
    public set creationDateTimestamp(creationDateTimestamp: number  | undefined) {
        this['creation_date_timestamp'] = creationDateTimestamp;
    }
    public get creationDateTimestamp(): number | undefined {
        return this['creation_date_timestamp'];
    }
    public withLastModified(lastModified: Date): TestResultVo {
        this['last_modified'] = lastModified;
        return this;
    }
    public set lastModified(lastModified: Date  | undefined) {
        this['last_modified'] = lastModified;
    }
    public get lastModified(): Date | undefined {
        return this['last_modified'];
    }
    public withLastModifiedTimestamp(lastModifiedTimestamp: number): TestResultVo {
        this['last_modified_timestamp'] = lastModifiedTimestamp;
        return this;
    }
    public set lastModifiedTimestamp(lastModifiedTimestamp: number  | undefined) {
        this['last_modified_timestamp'] = lastModifiedTimestamp;
    }
    public get lastModifiedTimestamp(): number | undefined {
        return this['last_modified_timestamp'];
    }
    public withLastChangeTime(lastChangeTime: Date): TestResultVo {
        this['last_change_time'] = lastChangeTime;
        return this;
    }
    public set lastChangeTime(lastChangeTime: Date  | undefined) {
        this['last_change_time'] = lastChangeTime;
    }
    public get lastChangeTime(): Date | undefined {
        return this['last_change_time'];
    }
    public withLastChangeTimeTimestamp(lastChangeTimeTimestamp: number): TestResultVo {
        this['last_change_time_timestamp'] = lastChangeTimeTimestamp;
        return this;
    }
    public set lastChangeTimeTimestamp(lastChangeTimeTimestamp: number  | undefined) {
        this['last_change_time_timestamp'] = lastChangeTimeTimestamp;
    }
    public get lastChangeTimeTimestamp(): number | undefined {
        return this['last_change_time_timestamp'];
    }
    public withDfxTestResult(dfxTestResult: string): TestResultVo {
        this['dfx_test_result'] = dfxTestResult;
        return this;
    }
    public set dfxTestResult(dfxTestResult: string  | undefined) {
        this['dfx_test_result'] = dfxTestResult;
    }
    public get dfxTestResult(): string | undefined {
        return this['dfx_test_result'];
    }
    public withFailureCause(failureCause: string): TestResultVo {
        this['failure_cause'] = failureCause;
        return this;
    }
    public set failureCause(failureCause: string  | undefined) {
        this['failure_cause'] = failureCause;
    }
    public get failureCause(): string | undefined {
        return this['failure_cause'];
    }
    public withParentUri(parentUri: string): TestResultVo {
        this['parent_uri'] = parentUri;
        return this;
    }
    public set parentUri(parentUri: string  | undefined) {
        this['parent_uri'] = parentUri;
    }
    public get parentUri(): string | undefined {
        return this['parent_uri'];
    }
    public withTestCaseUri(testCaseUri: string): TestResultVo {
        this['test_case_uri'] = testCaseUri;
        return this;
    }
    public set testCaseUri(testCaseUri: string  | undefined) {
        this['test_case_uri'] = testCaseUri;
    }
    public get testCaseUri(): string | undefined {
        return this['test_case_uri'];
    }
    public withTestCaseName(testCaseName: string): TestResultVo {
        this['test_case_name'] = testCaseName;
        return this;
    }
    public set testCaseName(testCaseName: string  | undefined) {
        this['test_case_name'] = testCaseName;
    }
    public get testCaseName(): string | undefined {
        return this['test_case_name'];
    }
    public withTaskUri(taskUri: string): TestResultVo {
        this['task_uri'] = taskUri;
        return this;
    }
    public set taskUri(taskUri: string  | undefined) {
        this['task_uri'] = taskUri;
    }
    public get taskUri(): string | undefined {
        return this['task_uri'];
    }
    public withResultName(resultName: string): TestResultVo {
        this['result_name'] = resultName;
        return this;
    }
    public set resultName(resultName: string  | undefined) {
        this['result_name'] = resultName;
    }
    public get resultName(): string | undefined {
        return this['result_name'];
    }
    public withTestResultAe(testResultAe: string): TestResultVo {
        this['test_result_ae'] = testResultAe;
        return this;
    }
    public set testResultAe(testResultAe: string  | undefined) {
        this['test_result_ae'] = testResultAe;
    }
    public get testResultAe(): string | undefined {
        return this['test_result_ae'];
    }
    public withExecutorId(executorId: string): TestResultVo {
        this['executor_id'] = executorId;
        return this;
    }
    public set executorId(executorId: string  | undefined) {
        this['executor_id'] = executorId;
    }
    public get executorId(): string | undefined {
        return this['executor_id'];
    }
    public withExecutorName(executorName: string): TestResultVo {
        this['executor_name'] = executorName;
        return this;
    }
    public set executorName(executorName: string  | undefined) {
        this['executor_name'] = executorName;
    }
    public get executorName(): string | undefined {
        return this['executor_name'];
    }
    public withTaskId(taskId: string): TestResultVo {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withExecuteId(executeId: string): TestResultVo {
        this['execute_id'] = executeId;
        return this;
    }
    public set executeId(executeId: string  | undefined) {
        this['execute_id'] = executeId;
    }
    public get executeId(): string | undefined {
        return this['execute_id'];
    }
    public withTimeCost(timeCost: number): TestResultVo {
        this['time_cost'] = timeCost;
        return this;
    }
    public set timeCost(timeCost: number  | undefined) {
        this['time_cost'] = timeCost;
    }
    public get timeCost(): number | undefined {
        return this['time_cost'];
    }
    public withStepTxt(stepTxt: string): TestResultVo {
        this['step_txt'] = stepTxt;
        return this;
    }
    public set stepTxt(stepTxt: string  | undefined) {
        this['step_txt'] = stepTxt;
    }
    public get stepTxt(): string | undefined {
        return this['step_txt'];
    }
    public withStepExpect(stepExpect: string): TestResultVo {
        this['step_expect'] = stepExpect;
        return this;
    }
    public set stepExpect(stepExpect: string  | undefined) {
        this['step_expect'] = stepExpect;
    }
    public get stepExpect(): string | undefined {
        return this['step_expect'];
    }
    public withStepActual(stepActual: string): TestResultVo {
        this['step_actual'] = stepActual;
        return this;
    }
    public set stepActual(stepActual: string  | undefined) {
        this['step_actual'] = stepActual;
    }
    public get stepActual(): string | undefined {
        return this['step_actual'];
    }
    public withStepResult(stepResult: string): TestResultVo {
        this['step_result'] = stepResult;
        return this;
    }
    public set stepResult(stepResult: string  | undefined) {
        this['step_result'] = stepResult;
    }
    public get stepResult(): string | undefined {
        return this['step_result'];
    }
    public withReleaseDev(releaseDev: string): TestResultVo {
        this['release_dev'] = releaseDev;
        return this;
    }
    public set releaseDev(releaseDev: string  | undefined) {
        this['release_dev'] = releaseDev;
    }
    public get releaseDev(): string | undefined {
        return this['release_dev'];
    }
    public withCreationVersionUri(creationVersionUri: string): TestResultVo {
        this['creation_version_uri'] = creationVersionUri;
        return this;
    }
    public set creationVersionUri(creationVersionUri: string  | undefined) {
        this['creation_version_uri'] = creationVersionUri;
    }
    public get creationVersionUri(): string | undefined {
        return this['creation_version_uri'];
    }
    public withVersionUri(versionUri: string): TestResultVo {
        this['version_uri'] = versionUri;
        return this;
    }
    public set versionUri(versionUri: string  | undefined) {
        this['version_uri'] = versionUri;
    }
    public get versionUri(): string | undefined {
        return this['version_uri'];
    }
    public withProjectId(projectId: string): TestResultVo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withReportUrl(reportUrl: string): TestResultVo {
        this['report_url'] = reportUrl;
        return this;
    }
    public set reportUrl(reportUrl: string  | undefined) {
        this['report_url'] = reportUrl;
    }
    public get reportUrl(): string | undefined {
        return this['report_url'];
    }
    public withTestCaseNumber(testCaseNumber: string): TestResultVo {
        this['test_case_number'] = testCaseNumber;
        return this;
    }
    public set testCaseNumber(testCaseNumber: string  | undefined) {
        this['test_case_number'] = testCaseNumber;
    }
    public get testCaseNumber(): string | undefined {
        return this['test_case_number'];
    }
    public withServiceType(serviceType: string): TestResultVo {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): string | undefined {
        return this['service_type'];
    }
}