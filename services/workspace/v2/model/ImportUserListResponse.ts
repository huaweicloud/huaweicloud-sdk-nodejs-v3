import { BaseResponse } from './BaseResponse';
import { DesktopUserDetail } from './DesktopUserDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ImportUserListResponse extends SdkResponse {
    private 'error_code'?: string;
    private 'error_msg'?: string;
    private 'error_detail'?: string;
    private 'encoded_authorization_message'?: string;
    private 'user_detail_list'?: Array<DesktopUserDetail>;
    private 'failed_detail_list'?: Array<DesktopUserDetail>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withErrorCode(errorCode: string): ImportUserListResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): ImportUserListResponse {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withErrorDetail(errorDetail: string): ImportUserListResponse {
        this['error_detail'] = errorDetail;
        return this;
    }
    public set errorDetail(errorDetail: string  | undefined) {
        this['error_detail'] = errorDetail;
    }
    public get errorDetail(): string | undefined {
        return this['error_detail'];
    }
    public withEncodedAuthorizationMessage(encodedAuthorizationMessage: string): ImportUserListResponse {
        this['encoded_authorization_message'] = encodedAuthorizationMessage;
        return this;
    }
    public set encodedAuthorizationMessage(encodedAuthorizationMessage: string  | undefined) {
        this['encoded_authorization_message'] = encodedAuthorizationMessage;
    }
    public get encodedAuthorizationMessage(): string | undefined {
        return this['encoded_authorization_message'];
    }
    public withUserDetailList(userDetailList: Array<DesktopUserDetail>): ImportUserListResponse {
        this['user_detail_list'] = userDetailList;
        return this;
    }
    public set userDetailList(userDetailList: Array<DesktopUserDetail>  | undefined) {
        this['user_detail_list'] = userDetailList;
    }
    public get userDetailList(): Array<DesktopUserDetail> | undefined {
        return this['user_detail_list'];
    }
    public withFailedDetailList(failedDetailList: Array<DesktopUserDetail>): ImportUserListResponse {
        this['failed_detail_list'] = failedDetailList;
        return this;
    }
    public set failedDetailList(failedDetailList: Array<DesktopUserDetail>  | undefined) {
        this['failed_detail_list'] = failedDetailList;
    }
    public get failedDetailList(): Array<DesktopUserDetail> | undefined {
        return this['failed_detail_list'];
    }
    public withTotalCount(totalCount: number): ImportUserListResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}