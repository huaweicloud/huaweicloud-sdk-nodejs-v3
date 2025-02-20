import { UserOrgRelationListResult } from './UserOrgRelationListResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowUserDetailResponse extends SdkResponse {
    private 'user_id'?: string;
    private 'org_id'?: string;
    private 'user_name'?: string;
    public name?: string;
    public mobile?: string;
    public email?: string;
    private 'pwd_must_modify'?: boolean;
    private 'pwd_change_at'?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public disabled?: boolean;
    public grade?: number;
    public locked?: string;
    public extension?: object;
    private 'user_org_relation_list'?: Array<UserOrgRelationListResult>;
    private 'domain_id'?: string;
    public constructor() { 
        super();
    }
    public withUserId(userId: string): ShowUserDetailResponse {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withOrgId(orgId: string): ShowUserDetailResponse {
        this['org_id'] = orgId;
        return this;
    }
    public set orgId(orgId: string  | undefined) {
        this['org_id'] = orgId;
    }
    public get orgId(): string | undefined {
        return this['org_id'];
    }
    public withUserName(userName: string): ShowUserDetailResponse {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withName(name: string): ShowUserDetailResponse {
        this['name'] = name;
        return this;
    }
    public withMobile(mobile: string): ShowUserDetailResponse {
        this['mobile'] = mobile;
        return this;
    }
    public withEmail(email: string): ShowUserDetailResponse {
        this['email'] = email;
        return this;
    }
    public withPwdMustModify(pwdMustModify: boolean): ShowUserDetailResponse {
        this['pwd_must_modify'] = pwdMustModify;
        return this;
    }
    public set pwdMustModify(pwdMustModify: boolean  | undefined) {
        this['pwd_must_modify'] = pwdMustModify;
    }
    public get pwdMustModify(): boolean | undefined {
        return this['pwd_must_modify'];
    }
    public withPwdChangeAt(pwdChangeAt: string): ShowUserDetailResponse {
        this['pwd_change_at'] = pwdChangeAt;
        return this;
    }
    public set pwdChangeAt(pwdChangeAt: string  | undefined) {
        this['pwd_change_at'] = pwdChangeAt;
    }
    public get pwdChangeAt(): string | undefined {
        return this['pwd_change_at'];
    }
    public withCreatedAt(createdAt: string): ShowUserDetailResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): ShowUserDetailResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withDisabled(disabled: boolean): ShowUserDetailResponse {
        this['disabled'] = disabled;
        return this;
    }
    public withGrade(grade: number): ShowUserDetailResponse {
        this['grade'] = grade;
        return this;
    }
    public withLocked(locked: string): ShowUserDetailResponse {
        this['locked'] = locked;
        return this;
    }
    public withExtension(extension: object): ShowUserDetailResponse {
        this['extension'] = extension;
        return this;
    }
    public withUserOrgRelationList(userOrgRelationList: Array<UserOrgRelationListResult>): ShowUserDetailResponse {
        this['user_org_relation_list'] = userOrgRelationList;
        return this;
    }
    public set userOrgRelationList(userOrgRelationList: Array<UserOrgRelationListResult>  | undefined) {
        this['user_org_relation_list'] = userOrgRelationList;
    }
    public get userOrgRelationList(): Array<UserOrgRelationListResult> | undefined {
        return this['user_org_relation_list'];
    }
    public withDomainId(domainId: string): ShowUserDetailResponse {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
}