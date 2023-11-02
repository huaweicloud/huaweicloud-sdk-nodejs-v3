
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowApplyDetailResponse extends SdkResponse {
    public id?: string;
    private 'api_apply_status'?: ShowApplyDetailResponseApiApplyStatusEnum | string;
    private 'api_apply_type'?: ShowApplyDetailResponseApiApplyTypeEnum | string;
    private 'api_id'?: string;
    private 'api_name'?: string;
    private 'api_using_time'?: number;
    private 'app_id'?: string;
    private 'app_name'?: string;
    private 'apply_time'?: number;
    private 'approval_time'?: number;
    private 'approver_name'?: string;
    public comment?: string;
    private 'user_name'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowApplyDetailResponse {
        this['id'] = id;
        return this;
    }
    public withApiApplyStatus(apiApplyStatus: ShowApplyDetailResponseApiApplyStatusEnum | string): ShowApplyDetailResponse {
        this['api_apply_status'] = apiApplyStatus;
        return this;
    }
    public set apiApplyStatus(apiApplyStatus: ShowApplyDetailResponseApiApplyStatusEnum | string  | undefined) {
        this['api_apply_status'] = apiApplyStatus;
    }
    public get apiApplyStatus(): ShowApplyDetailResponseApiApplyStatusEnum | string | undefined {
        return this['api_apply_status'];
    }
    public withApiApplyType(apiApplyType: ShowApplyDetailResponseApiApplyTypeEnum | string): ShowApplyDetailResponse {
        this['api_apply_type'] = apiApplyType;
        return this;
    }
    public set apiApplyType(apiApplyType: ShowApplyDetailResponseApiApplyTypeEnum | string  | undefined) {
        this['api_apply_type'] = apiApplyType;
    }
    public get apiApplyType(): ShowApplyDetailResponseApiApplyTypeEnum | string | undefined {
        return this['api_apply_type'];
    }
    public withApiId(apiId: string): ShowApplyDetailResponse {
        this['api_id'] = apiId;
        return this;
    }
    public set apiId(apiId: string  | undefined) {
        this['api_id'] = apiId;
    }
    public get apiId(): string | undefined {
        return this['api_id'];
    }
    public withApiName(apiName: string): ShowApplyDetailResponse {
        this['api_name'] = apiName;
        return this;
    }
    public set apiName(apiName: string  | undefined) {
        this['api_name'] = apiName;
    }
    public get apiName(): string | undefined {
        return this['api_name'];
    }
    public withApiUsingTime(apiUsingTime: number): ShowApplyDetailResponse {
        this['api_using_time'] = apiUsingTime;
        return this;
    }
    public set apiUsingTime(apiUsingTime: number  | undefined) {
        this['api_using_time'] = apiUsingTime;
    }
    public get apiUsingTime(): number | undefined {
        return this['api_using_time'];
    }
    public withAppId(appId: string): ShowApplyDetailResponse {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withAppName(appName: string): ShowApplyDetailResponse {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withApplyTime(applyTime: number): ShowApplyDetailResponse {
        this['apply_time'] = applyTime;
        return this;
    }
    public set applyTime(applyTime: number  | undefined) {
        this['apply_time'] = applyTime;
    }
    public get applyTime(): number | undefined {
        return this['apply_time'];
    }
    public withApprovalTime(approvalTime: number): ShowApplyDetailResponse {
        this['approval_time'] = approvalTime;
        return this;
    }
    public set approvalTime(approvalTime: number  | undefined) {
        this['approval_time'] = approvalTime;
    }
    public get approvalTime(): number | undefined {
        return this['approval_time'];
    }
    public withApproverName(approverName: string): ShowApplyDetailResponse {
        this['approver_name'] = approverName;
        return this;
    }
    public set approverName(approverName: string  | undefined) {
        this['approver_name'] = approverName;
    }
    public get approverName(): string | undefined {
        return this['approver_name'];
    }
    public withComment(comment: string): ShowApplyDetailResponse {
        this['comment'] = comment;
        return this;
    }
    public withUserName(userName: string): ShowApplyDetailResponse {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowApplyDetailResponseApiApplyStatusEnum {
    STATUS_TYPE_PENDING_APPROVAL = 'STATUS_TYPE_PENDING_APPROVAL',
    STATUS_TYPE_REJECTED = 'STATUS_TYPE_REJECTED',
    STATUS_TYPE_PENDING_CHECK = 'STATUS_TYPE_PENDING_CHECK',
    STATUS_TYPE_PENDING_EXECUTE = 'STATUS_TYPE_PENDING_EXECUTE',
    STATUS_TYPE_SYNCHRONOUS_EXECUTE = 'STATUS_TYPE_SYNCHRONOUS_EXECUTE',
    STATUS_TYPE_FORCED_CANCEL = 'STATUS_TYPE_FORCED_CANCEL',
    STATUS_TYPE_PASSED = 'STATUS_TYPE_PASSED'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowApplyDetailResponseApiApplyTypeEnum {
    APPLY_TYPE_PUBLISH = 'APPLY_TYPE_PUBLISH',
    APPLY_TYPE_AUTHORIZE = 'APPLY_TYPE_AUTHORIZE',
    APPLY_TYPE_APPLY = 'APPLY_TYPE_APPLY',
    APPLY_TYPE_RENEW = 'APPLY_TYPE_RENEW',
    APPLY_TYPE_STOP = 'APPLY_TYPE_STOP',
    APPLY_TYPE_RECOVER = 'APPLY_TYPE_RECOVER',
    APPLY_TYPE_API_CANCEL_AUTHORIZE = 'APPLY_TYPE_API_CANCEL_AUTHORIZE',
    APPLY_TYPE_APP_CANCEL_AUTHORIZE = 'APPLY_TYPE_APP_CANCEL_AUTHORIZE',
    APPLY_TYPE_OFFLINE = 'APPLY_TYPE_OFFLINE'
}
