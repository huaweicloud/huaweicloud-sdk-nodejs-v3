import { CloudTestCaseOperationInfo } from './CloudTestCaseOperationInfo';


export class CloudTestSuiteBasicInfo {
    public caseOperationInfo?: CloudTestCaseOperationInfo;
    private 'create_time'?: string;
    private 'create_user'?: string;
    private 'create_user_id'?: string;
    public description?: string;
    private 'doc_type'?: number;
    private 'execute_status'?: number;
    private 'execute_times'?: number;
    private 'execute_type'?: number;
    private 'execute_way'?: string;
    private 'expiration_status'?: number;
    public extParam?: string;
    public id?: string;
    private 'iterator_version_uri'?: string;
    public moduleId?: string;
    public moduleName?: string;
    public name?: string;
    public nodeId?: string;
    public ownerId?: string;
    public planId?: string;
    private 'plan_end_timestamp'?: number;
    private 'plan_start_timestamp'?: number;
    public projectId?: number;
    public projectUUId?: string;
    public releaseDev?: string;
    public result?: number;
    public status?: number;
    public tags?: Array<string>;
    public testSuiteId?: string;
    public testSuiteNumber?: string;
    public type?: number;
    private 'update_time'?: string;
    private 'update_user'?: string;
    private 'update_user_id'?: string;
    public constructor() { 
    }
    public withCaseOperationInfo(caseOperationInfo: CloudTestCaseOperationInfo): CloudTestSuiteBasicInfo {
        this['caseOperationInfo'] = caseOperationInfo;
        return this;
    }
    public withCreateTime(createTime: string): CloudTestSuiteBasicInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withCreateUser(createUser: string): CloudTestSuiteBasicInfo {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withCreateUserId(createUserId: string): CloudTestSuiteBasicInfo {
        this['create_user_id'] = createUserId;
        return this;
    }
    public set createUserId(createUserId: string  | undefined) {
        this['create_user_id'] = createUserId;
    }
    public get createUserId(): string | undefined {
        return this['create_user_id'];
    }
    public withDescription(description: string): CloudTestSuiteBasicInfo {
        this['description'] = description;
        return this;
    }
    public withDocType(docType: number): CloudTestSuiteBasicInfo {
        this['doc_type'] = docType;
        return this;
    }
    public set docType(docType: number  | undefined) {
        this['doc_type'] = docType;
    }
    public get docType(): number | undefined {
        return this['doc_type'];
    }
    public withExecuteStatus(executeStatus: number): CloudTestSuiteBasicInfo {
        this['execute_status'] = executeStatus;
        return this;
    }
    public set executeStatus(executeStatus: number  | undefined) {
        this['execute_status'] = executeStatus;
    }
    public get executeStatus(): number | undefined {
        return this['execute_status'];
    }
    public withExecuteTimes(executeTimes: number): CloudTestSuiteBasicInfo {
        this['execute_times'] = executeTimes;
        return this;
    }
    public set executeTimes(executeTimes: number  | undefined) {
        this['execute_times'] = executeTimes;
    }
    public get executeTimes(): number | undefined {
        return this['execute_times'];
    }
    public withExecuteType(executeType: number): CloudTestSuiteBasicInfo {
        this['execute_type'] = executeType;
        return this;
    }
    public set executeType(executeType: number  | undefined) {
        this['execute_type'] = executeType;
    }
    public get executeType(): number | undefined {
        return this['execute_type'];
    }
    public withExecuteWay(executeWay: string): CloudTestSuiteBasicInfo {
        this['execute_way'] = executeWay;
        return this;
    }
    public set executeWay(executeWay: string  | undefined) {
        this['execute_way'] = executeWay;
    }
    public get executeWay(): string | undefined {
        return this['execute_way'];
    }
    public withExpirationStatus(expirationStatus: number): CloudTestSuiteBasicInfo {
        this['expiration_status'] = expirationStatus;
        return this;
    }
    public set expirationStatus(expirationStatus: number  | undefined) {
        this['expiration_status'] = expirationStatus;
    }
    public get expirationStatus(): number | undefined {
        return this['expiration_status'];
    }
    public withExtParam(extParam: string): CloudTestSuiteBasicInfo {
        this['extParam'] = extParam;
        return this;
    }
    public withId(id: string): CloudTestSuiteBasicInfo {
        this['id'] = id;
        return this;
    }
    public withIteratorVersionUri(iteratorVersionUri: string): CloudTestSuiteBasicInfo {
        this['iterator_version_uri'] = iteratorVersionUri;
        return this;
    }
    public set iteratorVersionUri(iteratorVersionUri: string  | undefined) {
        this['iterator_version_uri'] = iteratorVersionUri;
    }
    public get iteratorVersionUri(): string | undefined {
        return this['iterator_version_uri'];
    }
    public withModuleId(moduleId: string): CloudTestSuiteBasicInfo {
        this['moduleId'] = moduleId;
        return this;
    }
    public withModuleName(moduleName: string): CloudTestSuiteBasicInfo {
        this['moduleName'] = moduleName;
        return this;
    }
    public withName(name: string): CloudTestSuiteBasicInfo {
        this['name'] = name;
        return this;
    }
    public withNodeId(nodeId: string): CloudTestSuiteBasicInfo {
        this['nodeId'] = nodeId;
        return this;
    }
    public withOwnerId(ownerId: string): CloudTestSuiteBasicInfo {
        this['ownerId'] = ownerId;
        return this;
    }
    public withPlanId(planId: string): CloudTestSuiteBasicInfo {
        this['planId'] = planId;
        return this;
    }
    public withPlanEndTimestamp(planEndTimestamp: number): CloudTestSuiteBasicInfo {
        this['plan_end_timestamp'] = planEndTimestamp;
        return this;
    }
    public set planEndTimestamp(planEndTimestamp: number  | undefined) {
        this['plan_end_timestamp'] = planEndTimestamp;
    }
    public get planEndTimestamp(): number | undefined {
        return this['plan_end_timestamp'];
    }
    public withPlanStartTimestamp(planStartTimestamp: number): CloudTestSuiteBasicInfo {
        this['plan_start_timestamp'] = planStartTimestamp;
        return this;
    }
    public set planStartTimestamp(planStartTimestamp: number  | undefined) {
        this['plan_start_timestamp'] = planStartTimestamp;
    }
    public get planStartTimestamp(): number | undefined {
        return this['plan_start_timestamp'];
    }
    public withProjectId(projectId: number): CloudTestSuiteBasicInfo {
        this['projectId'] = projectId;
        return this;
    }
    public withProjectUUId(projectUUId: string): CloudTestSuiteBasicInfo {
        this['projectUUId'] = projectUUId;
        return this;
    }
    public withReleaseDev(releaseDev: string): CloudTestSuiteBasicInfo {
        this['releaseDev'] = releaseDev;
        return this;
    }
    public withResult(result: number): CloudTestSuiteBasicInfo {
        this['result'] = result;
        return this;
    }
    public withStatus(status: number): CloudTestSuiteBasicInfo {
        this['status'] = status;
        return this;
    }
    public withTags(tags: Array<string>): CloudTestSuiteBasicInfo {
        this['tags'] = tags;
        return this;
    }
    public withTestSuiteId(testSuiteId: string): CloudTestSuiteBasicInfo {
        this['testSuiteId'] = testSuiteId;
        return this;
    }
    public withTestSuiteNumber(testSuiteNumber: string): CloudTestSuiteBasicInfo {
        this['testSuiteNumber'] = testSuiteNumber;
        return this;
    }
    public withType(type: number): CloudTestSuiteBasicInfo {
        this['type'] = type;
        return this;
    }
    public withUpdateTime(updateTime: string): CloudTestSuiteBasicInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withUpdateUser(updateUser: string): CloudTestSuiteBasicInfo {
        this['update_user'] = updateUser;
        return this;
    }
    public set updateUser(updateUser: string  | undefined) {
        this['update_user'] = updateUser;
    }
    public get updateUser(): string | undefined {
        return this['update_user'];
    }
    public withUpdateUserId(updateUserId: string): CloudTestSuiteBasicInfo {
        this['update_user_id'] = updateUserId;
        return this;
    }
    public set updateUserId(updateUserId: string  | undefined) {
        this['update_user_id'] = updateUserId;
    }
    public get updateUserId(): string | undefined {
        return this['update_user_id'];
    }
}