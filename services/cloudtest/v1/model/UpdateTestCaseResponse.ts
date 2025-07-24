import { AssignedUserInfo } from './AssignedUserInfo';
import { ExtendInfo } from './ExtendInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateTestCaseResponse extends SdkResponse {
    private 'testcase_id'?: string;
    private 'project_id'?: string;
    private 'service_id'?: number;
    public name?: string;
    private 'testcase_number'?: string;
    private 'rank_id'?: number;
    private 'status_id'?: string;
    private 'assigned_user'?: AssignedUserInfo;
    private 'execute_count'?: number;
    private 'result_id'?: string;
    private 'extend_info'?: ExtendInfo;
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public constructor() { 
        super();
    }
    public withTestcaseId(testcaseId: string): UpdateTestCaseResponse {
        this['testcase_id'] = testcaseId;
        return this;
    }
    public set testcaseId(testcaseId: string  | undefined) {
        this['testcase_id'] = testcaseId;
    }
    public get testcaseId(): string | undefined {
        return this['testcase_id'];
    }
    public withProjectId(projectId: string): UpdateTestCaseResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withServiceId(serviceId: number): UpdateTestCaseResponse {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: number  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): number | undefined {
        return this['service_id'];
    }
    public withName(name: string): UpdateTestCaseResponse {
        this['name'] = name;
        return this;
    }
    public withTestcaseNumber(testcaseNumber: string): UpdateTestCaseResponse {
        this['testcase_number'] = testcaseNumber;
        return this;
    }
    public set testcaseNumber(testcaseNumber: string  | undefined) {
        this['testcase_number'] = testcaseNumber;
    }
    public get testcaseNumber(): string | undefined {
        return this['testcase_number'];
    }
    public withRankId(rankId: number): UpdateTestCaseResponse {
        this['rank_id'] = rankId;
        return this;
    }
    public set rankId(rankId: number  | undefined) {
        this['rank_id'] = rankId;
    }
    public get rankId(): number | undefined {
        return this['rank_id'];
    }
    public withStatusId(statusId: string): UpdateTestCaseResponse {
        this['status_id'] = statusId;
        return this;
    }
    public set statusId(statusId: string  | undefined) {
        this['status_id'] = statusId;
    }
    public get statusId(): string | undefined {
        return this['status_id'];
    }
    public withAssignedUser(assignedUser: AssignedUserInfo): UpdateTestCaseResponse {
        this['assigned_user'] = assignedUser;
        return this;
    }
    public set assignedUser(assignedUser: AssignedUserInfo  | undefined) {
        this['assigned_user'] = assignedUser;
    }
    public get assignedUser(): AssignedUserInfo | undefined {
        return this['assigned_user'];
    }
    public withExecuteCount(executeCount: number): UpdateTestCaseResponse {
        this['execute_count'] = executeCount;
        return this;
    }
    public set executeCount(executeCount: number  | undefined) {
        this['execute_count'] = executeCount;
    }
    public get executeCount(): number | undefined {
        return this['execute_count'];
    }
    public withResultId(resultId: string): UpdateTestCaseResponse {
        this['result_id'] = resultId;
        return this;
    }
    public set resultId(resultId: string  | undefined) {
        this['result_id'] = resultId;
    }
    public get resultId(): string | undefined {
        return this['result_id'];
    }
    public withExtendInfo(extendInfo: ExtendInfo): UpdateTestCaseResponse {
        this['extend_info'] = extendInfo;
        return this;
    }
    public set extendInfo(extendInfo: ExtendInfo  | undefined) {
        this['extend_info'] = extendInfo;
    }
    public get extendInfo(): ExtendInfo | undefined {
        return this['extend_info'];
    }
    public withErrorCode(errorCode: string): UpdateTestCaseResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): UpdateTestCaseResponse {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
}