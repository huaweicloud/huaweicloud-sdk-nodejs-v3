
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCurUserInfoResponse extends SdkResponse {
    private 'domain_id'?: string;
    private 'domain_name'?: string;
    private 'user_num_id'?: number;
    private 'user_id'?: string;
    private 'user_name'?: string;
    private 'nick_name'?: string;
    private 'created_time'?: number;
    private 'updated_time'?: number;
    public gender?: string;
    private 'user_type'?: string;
    public constructor() { 
        super();
    }
    public withDomainId(domainId: string): ShowCurUserInfoResponse {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withDomainName(domainName: string): ShowCurUserInfoResponse {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withUserNumId(userNumId: number): ShowCurUserInfoResponse {
        this['user_num_id'] = userNumId;
        return this;
    }
    public set userNumId(userNumId: number  | undefined) {
        this['user_num_id'] = userNumId;
    }
    public get userNumId(): number | undefined {
        return this['user_num_id'];
    }
    public withUserId(userId: string): ShowCurUserInfoResponse {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withUserName(userName: string): ShowCurUserInfoResponse {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withNickName(nickName: string): ShowCurUserInfoResponse {
        this['nick_name'] = nickName;
        return this;
    }
    public set nickName(nickName: string  | undefined) {
        this['nick_name'] = nickName;
    }
    public get nickName(): string | undefined {
        return this['nick_name'];
    }
    public withCreatedTime(createdTime: number): ShowCurUserInfoResponse {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: number  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): number | undefined {
        return this['created_time'];
    }
    public withUpdatedTime(updatedTime: number): ShowCurUserInfoResponse {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: number  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): number | undefined {
        return this['updated_time'];
    }
    public withGender(gender: string): ShowCurUserInfoResponse {
        this['gender'] = gender;
        return this;
    }
    public withUserType(userType: string): ShowCurUserInfoResponse {
        this['user_type'] = userType;
        return this;
    }
    public set userType(userType: string  | undefined) {
        this['user_type'] = userType;
    }
    public get userType(): string | undefined {
        return this['user_type'];
    }
}