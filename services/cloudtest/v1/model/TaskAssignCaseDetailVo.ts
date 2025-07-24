

export class TaskAssignCaseDetailVo {
    public uri?: string;
    public sort?: number;
    public owner?: string;
    public stage?: number;
    private 'project_uuid'?: string;
    private 'task_uri'?: string;
    private 'update_time'?: Date;
    private 'updator_name'?: string;
    public updator?: string;
    private 'case_uri'?: string;
    private 'is_available'?: number;
    private 'test_case_name'?: string;
    private 'feature_uri'?: string;
    private 'test_case_number'?: string;
    private 'svn_script_path'?: string;
    private 'status_code'?: string;
    private 'status_name'?: string;
    private 'result_code'?: string;
    private 'result_name'?: string;
    private 'owner_name'?: string;
    private 'execute_latest_time'?: Date;
    private 'execute_duration'?: string;
    private 'is_keyword'?: number;
    private 'net_work_script_name'?: string;
    private 'rank_id'?: number;
    public constructor() { 
    }
    public withUri(uri: string): TaskAssignCaseDetailVo {
        this['uri'] = uri;
        return this;
    }
    public withSort(sort: number): TaskAssignCaseDetailVo {
        this['sort'] = sort;
        return this;
    }
    public withOwner(owner: string): TaskAssignCaseDetailVo {
        this['owner'] = owner;
        return this;
    }
    public withStage(stage: number): TaskAssignCaseDetailVo {
        this['stage'] = stage;
        return this;
    }
    public withProjectUuid(projectUuid: string): TaskAssignCaseDetailVo {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
    public withTaskUri(taskUri: string): TaskAssignCaseDetailVo {
        this['task_uri'] = taskUri;
        return this;
    }
    public set taskUri(taskUri: string  | undefined) {
        this['task_uri'] = taskUri;
    }
    public get taskUri(): string | undefined {
        return this['task_uri'];
    }
    public withUpdateTime(updateTime: Date): TaskAssignCaseDetailVo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withUpdatorName(updatorName: string): TaskAssignCaseDetailVo {
        this['updator_name'] = updatorName;
        return this;
    }
    public set updatorName(updatorName: string  | undefined) {
        this['updator_name'] = updatorName;
    }
    public get updatorName(): string | undefined {
        return this['updator_name'];
    }
    public withUpdator(updator: string): TaskAssignCaseDetailVo {
        this['updator'] = updator;
        return this;
    }
    public withCaseUri(caseUri: string): TaskAssignCaseDetailVo {
        this['case_uri'] = caseUri;
        return this;
    }
    public set caseUri(caseUri: string  | undefined) {
        this['case_uri'] = caseUri;
    }
    public get caseUri(): string | undefined {
        return this['case_uri'];
    }
    public withIsAvailable(isAvailable: number): TaskAssignCaseDetailVo {
        this['is_available'] = isAvailable;
        return this;
    }
    public set isAvailable(isAvailable: number  | undefined) {
        this['is_available'] = isAvailable;
    }
    public get isAvailable(): number | undefined {
        return this['is_available'];
    }
    public withTestCaseName(testCaseName: string): TaskAssignCaseDetailVo {
        this['test_case_name'] = testCaseName;
        return this;
    }
    public set testCaseName(testCaseName: string  | undefined) {
        this['test_case_name'] = testCaseName;
    }
    public get testCaseName(): string | undefined {
        return this['test_case_name'];
    }
    public withFeatureUri(featureUri: string): TaskAssignCaseDetailVo {
        this['feature_uri'] = featureUri;
        return this;
    }
    public set featureUri(featureUri: string  | undefined) {
        this['feature_uri'] = featureUri;
    }
    public get featureUri(): string | undefined {
        return this['feature_uri'];
    }
    public withTestCaseNumber(testCaseNumber: string): TaskAssignCaseDetailVo {
        this['test_case_number'] = testCaseNumber;
        return this;
    }
    public set testCaseNumber(testCaseNumber: string  | undefined) {
        this['test_case_number'] = testCaseNumber;
    }
    public get testCaseNumber(): string | undefined {
        return this['test_case_number'];
    }
    public withSvnScriptPath(svnScriptPath: string): TaskAssignCaseDetailVo {
        this['svn_script_path'] = svnScriptPath;
        return this;
    }
    public set svnScriptPath(svnScriptPath: string  | undefined) {
        this['svn_script_path'] = svnScriptPath;
    }
    public get svnScriptPath(): string | undefined {
        return this['svn_script_path'];
    }
    public withStatusCode(statusCode: string): TaskAssignCaseDetailVo {
        this['status_code'] = statusCode;
        return this;
    }
    public set statusCode(statusCode: string  | undefined) {
        this['status_code'] = statusCode;
    }
    public get statusCode(): string | undefined {
        return this['status_code'];
    }
    public withStatusName(statusName: string): TaskAssignCaseDetailVo {
        this['status_name'] = statusName;
        return this;
    }
    public set statusName(statusName: string  | undefined) {
        this['status_name'] = statusName;
    }
    public get statusName(): string | undefined {
        return this['status_name'];
    }
    public withResultCode(resultCode: string): TaskAssignCaseDetailVo {
        this['result_code'] = resultCode;
        return this;
    }
    public set resultCode(resultCode: string  | undefined) {
        this['result_code'] = resultCode;
    }
    public get resultCode(): string | undefined {
        return this['result_code'];
    }
    public withResultName(resultName: string): TaskAssignCaseDetailVo {
        this['result_name'] = resultName;
        return this;
    }
    public set resultName(resultName: string  | undefined) {
        this['result_name'] = resultName;
    }
    public get resultName(): string | undefined {
        return this['result_name'];
    }
    public withOwnerName(ownerName: string): TaskAssignCaseDetailVo {
        this['owner_name'] = ownerName;
        return this;
    }
    public set ownerName(ownerName: string  | undefined) {
        this['owner_name'] = ownerName;
    }
    public get ownerName(): string | undefined {
        return this['owner_name'];
    }
    public withExecuteLatestTime(executeLatestTime: Date): TaskAssignCaseDetailVo {
        this['execute_latest_time'] = executeLatestTime;
        return this;
    }
    public set executeLatestTime(executeLatestTime: Date  | undefined) {
        this['execute_latest_time'] = executeLatestTime;
    }
    public get executeLatestTime(): Date | undefined {
        return this['execute_latest_time'];
    }
    public withExecuteDuration(executeDuration: string): TaskAssignCaseDetailVo {
        this['execute_duration'] = executeDuration;
        return this;
    }
    public set executeDuration(executeDuration: string  | undefined) {
        this['execute_duration'] = executeDuration;
    }
    public get executeDuration(): string | undefined {
        return this['execute_duration'];
    }
    public withIsKeyword(isKeyword: number): TaskAssignCaseDetailVo {
        this['is_keyword'] = isKeyword;
        return this;
    }
    public set isKeyword(isKeyword: number  | undefined) {
        this['is_keyword'] = isKeyword;
    }
    public get isKeyword(): number | undefined {
        return this['is_keyword'];
    }
    public withNetWorkScriptName(netWorkScriptName: string): TaskAssignCaseDetailVo {
        this['net_work_script_name'] = netWorkScriptName;
        return this;
    }
    public set netWorkScriptName(netWorkScriptName: string  | undefined) {
        this['net_work_script_name'] = netWorkScriptName;
    }
    public get netWorkScriptName(): string | undefined {
        return this['net_work_script_name'];
    }
    public withRankId(rankId: number): TaskAssignCaseDetailVo {
        this['rank_id'] = rankId;
        return this;
    }
    public set rankId(rankId: number  | undefined) {
        this['rank_id'] = rankId;
    }
    public get rankId(): number | undefined {
        return this['rank_id'];
    }
}