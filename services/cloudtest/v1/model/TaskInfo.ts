import { CaseOperationInfo } from './CaseOperationInfo';


export class TaskInfo {
    public uri?: string;
    private 'version_uri'?: string;
    public name?: string;
    private 'owner_id'?: string;
    private 'parent_uri'?: string;
    private 'test_case_condition'?: string;
    public stage?: string;
    private 'service_type'?: number;
    private 'number'?: string;
    public tags?: Array<string>;
    private 'module_id'?: string;
    private 'module_name'?: string;
    private 'release_dev'?: string;
    private 'status_code'?: number;
    private 'ext_param'?: string;
    private 'execute_way'?: number;
    private 'execute_type'?: number;
    public description?: string;
    private 'plan_start_timestamp'?: number;
    private 'plan_end_timestamp'?: number;
    public region?: string;
    private 'assign_case_uris'?: Array<string>;
    private 'case_operation_info'?: CaseOperationInfo;
    private 'only_update_status'?: boolean;
    private 'is_async'?: boolean;
    public constructor() { 
    }
    public withUri(uri: string): TaskInfo {
        this['uri'] = uri;
        return this;
    }
    public withVersionUri(versionUri: string): TaskInfo {
        this['version_uri'] = versionUri;
        return this;
    }
    public set versionUri(versionUri: string  | undefined) {
        this['version_uri'] = versionUri;
    }
    public get versionUri(): string | undefined {
        return this['version_uri'];
    }
    public withName(name: string): TaskInfo {
        this['name'] = name;
        return this;
    }
    public withOwnerId(ownerId: string): TaskInfo {
        this['owner_id'] = ownerId;
        return this;
    }
    public set ownerId(ownerId: string  | undefined) {
        this['owner_id'] = ownerId;
    }
    public get ownerId(): string | undefined {
        return this['owner_id'];
    }
    public withParentUri(parentUri: string): TaskInfo {
        this['parent_uri'] = parentUri;
        return this;
    }
    public set parentUri(parentUri: string  | undefined) {
        this['parent_uri'] = parentUri;
    }
    public get parentUri(): string | undefined {
        return this['parent_uri'];
    }
    public withTestCaseCondition(testCaseCondition: string): TaskInfo {
        this['test_case_condition'] = testCaseCondition;
        return this;
    }
    public set testCaseCondition(testCaseCondition: string  | undefined) {
        this['test_case_condition'] = testCaseCondition;
    }
    public get testCaseCondition(): string | undefined {
        return this['test_case_condition'];
    }
    public withStage(stage: string): TaskInfo {
        this['stage'] = stage;
        return this;
    }
    public withServiceType(serviceType: number): TaskInfo {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: number  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): number | undefined {
        return this['service_type'];
    }
    public withModelNumber(modelNumber: string): TaskInfo {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): string | undefined {
        return this['number'];
    }
    public withTags(tags: Array<string>): TaskInfo {
        this['tags'] = tags;
        return this;
    }
    public withModuleId(moduleId: string): TaskInfo {
        this['module_id'] = moduleId;
        return this;
    }
    public set moduleId(moduleId: string  | undefined) {
        this['module_id'] = moduleId;
    }
    public get moduleId(): string | undefined {
        return this['module_id'];
    }
    public withModuleName(moduleName: string): TaskInfo {
        this['module_name'] = moduleName;
        return this;
    }
    public set moduleName(moduleName: string  | undefined) {
        this['module_name'] = moduleName;
    }
    public get moduleName(): string | undefined {
        return this['module_name'];
    }
    public withReleaseDev(releaseDev: string): TaskInfo {
        this['release_dev'] = releaseDev;
        return this;
    }
    public set releaseDev(releaseDev: string  | undefined) {
        this['release_dev'] = releaseDev;
    }
    public get releaseDev(): string | undefined {
        return this['release_dev'];
    }
    public withStatusCode(statusCode: number): TaskInfo {
        this['status_code'] = statusCode;
        return this;
    }
    public set statusCode(statusCode: number  | undefined) {
        this['status_code'] = statusCode;
    }
    public get statusCode(): number | undefined {
        return this['status_code'];
    }
    public withExtParam(extParam: string): TaskInfo {
        this['ext_param'] = extParam;
        return this;
    }
    public set extParam(extParam: string  | undefined) {
        this['ext_param'] = extParam;
    }
    public get extParam(): string | undefined {
        return this['ext_param'];
    }
    public withExecuteWay(executeWay: number): TaskInfo {
        this['execute_way'] = executeWay;
        return this;
    }
    public set executeWay(executeWay: number  | undefined) {
        this['execute_way'] = executeWay;
    }
    public get executeWay(): number | undefined {
        return this['execute_way'];
    }
    public withExecuteType(executeType: number): TaskInfo {
        this['execute_type'] = executeType;
        return this;
    }
    public set executeType(executeType: number  | undefined) {
        this['execute_type'] = executeType;
    }
    public get executeType(): number | undefined {
        return this['execute_type'];
    }
    public withDescription(description: string): TaskInfo {
        this['description'] = description;
        return this;
    }
    public withPlanStartTimestamp(planStartTimestamp: number): TaskInfo {
        this['plan_start_timestamp'] = planStartTimestamp;
        return this;
    }
    public set planStartTimestamp(planStartTimestamp: number  | undefined) {
        this['plan_start_timestamp'] = planStartTimestamp;
    }
    public get planStartTimestamp(): number | undefined {
        return this['plan_start_timestamp'];
    }
    public withPlanEndTimestamp(planEndTimestamp: number): TaskInfo {
        this['plan_end_timestamp'] = planEndTimestamp;
        return this;
    }
    public set planEndTimestamp(planEndTimestamp: number  | undefined) {
        this['plan_end_timestamp'] = planEndTimestamp;
    }
    public get planEndTimestamp(): number | undefined {
        return this['plan_end_timestamp'];
    }
    public withRegion(region: string): TaskInfo {
        this['region'] = region;
        return this;
    }
    public withAssignCaseUris(assignCaseUris: Array<string>): TaskInfo {
        this['assign_case_uris'] = assignCaseUris;
        return this;
    }
    public set assignCaseUris(assignCaseUris: Array<string>  | undefined) {
        this['assign_case_uris'] = assignCaseUris;
    }
    public get assignCaseUris(): Array<string> | undefined {
        return this['assign_case_uris'];
    }
    public withCaseOperationInfo(caseOperationInfo: CaseOperationInfo): TaskInfo {
        this['case_operation_info'] = caseOperationInfo;
        return this;
    }
    public set caseOperationInfo(caseOperationInfo: CaseOperationInfo  | undefined) {
        this['case_operation_info'] = caseOperationInfo;
    }
    public get caseOperationInfo(): CaseOperationInfo | undefined {
        return this['case_operation_info'];
    }
    public withOnlyUpdateStatus(onlyUpdateStatus: boolean): TaskInfo {
        this['only_update_status'] = onlyUpdateStatus;
        return this;
    }
    public set onlyUpdateStatus(onlyUpdateStatus: boolean  | undefined) {
        this['only_update_status'] = onlyUpdateStatus;
    }
    public get onlyUpdateStatus(): boolean | undefined {
        return this['only_update_status'];
    }
    public withIsAsync(isAsync: boolean): TaskInfo {
        this['is_async'] = isAsync;
        return this;
    }
    public set isAsync(isAsync: boolean  | undefined) {
        this['is_async'] = isAsync;
    }
    public get isAsync(): boolean | undefined {
        return this['is_async'];
    }
}