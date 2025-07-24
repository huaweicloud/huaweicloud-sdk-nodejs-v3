import { AssignedUserInfo } from './AssignedUserInfo';
import { ExtendInfo } from './ExtendInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTestCaseDetailV2Response extends SdkResponse {
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
    public withTestcaseId(testcaseId: string): ShowTestCaseDetailV2Response {
        this['testcase_id'] = testcaseId;
        return this;
    }
    public set testcaseId(testcaseId: string  | undefined) {
        this['testcase_id'] = testcaseId;
    }
    public get testcaseId(): string | undefined {
        return this['testcase_id'];
    }
    public withProjectId(projectId: string): ShowTestCaseDetailV2Response {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withServiceId(serviceId: number): ShowTestCaseDetailV2Response {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: number  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): number | undefined {
        return this['service_id'];
    }
    public withName(name: string): ShowTestCaseDetailV2Response {
        this['name'] = name;
        return this;
    }
    public withTestcaseNumber(testcaseNumber: string): ShowTestCaseDetailV2Response {
        this['testcase_number'] = testcaseNumber;
        return this;
    }
    public set testcaseNumber(testcaseNumber: string  | undefined) {
        this['testcase_number'] = testcaseNumber;
    }
    public get testcaseNumber(): string | undefined {
        return this['testcase_number'];
    }
    public withRankId(rankId: number): ShowTestCaseDetailV2Response {
        this['rank_id'] = rankId;
        return this;
    }
    public set rankId(rankId: number  | undefined) {
        this['rank_id'] = rankId;
    }
    public get rankId(): number | undefined {
        return this['rank_id'];
    }
    public withStatusId(statusId: string): ShowTestCaseDetailV2Response {
        this['status_id'] = statusId;
        return this;
    }
    public set statusId(statusId: string  | undefined) {
        this['status_id'] = statusId;
    }
    public get statusId(): string | undefined {
        return this['status_id'];
    }
    public withAssignedUser(assignedUser: AssignedUserInfo): ShowTestCaseDetailV2Response {
        this['assigned_user'] = assignedUser;
        return this;
    }
    public set assignedUser(assignedUser: AssignedUserInfo  | undefined) {
        this['assigned_user'] = assignedUser;
    }
    public get assignedUser(): AssignedUserInfo | undefined {
        return this['assigned_user'];
    }
    public withExecuteCount(executeCount: number): ShowTestCaseDetailV2Response {
        this['execute_count'] = executeCount;
        return this;
    }
    public set executeCount(executeCount: number  | undefined) {
        this['execute_count'] = executeCount;
    }
    public get executeCount(): number | undefined {
        return this['execute_count'];
    }
    public withResultId(resultId: string): ShowTestCaseDetailV2Response {
        this['result_id'] = resultId;
        return this;
    }
    public set resultId(resultId: string  | undefined) {
        this['result_id'] = resultId;
    }
    public get resultId(): string | undefined {
        return this['result_id'];
    }
    public withExtendInfo(extendInfo: ExtendInfo): ShowTestCaseDetailV2Response {
        this['extend_info'] = extendInfo;
        return this;
    }
    public set extendInfo(extendInfo: ExtendInfo  | undefined) {
        this['extend_info'] = extendInfo;
    }
    public get extendInfo(): ExtendInfo | undefined {
        return this['extend_info'];
    }
    public withErrorCode(errorCode: string): ShowTestCaseDetailV2Response {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): ShowTestCaseDetailV2Response {
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