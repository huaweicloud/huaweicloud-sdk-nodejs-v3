import { BaseUser } from './BaseUser';
import { SessionContext } from './SessionContext';


export class UserInfo {
    public id?: string;
    public name?: string;
    private 'user_name'?: string;
    public domain?: BaseUser;
    private 'account_id'?: string;
    private 'access_key_id'?: string;
    private 'principal_urn'?: string;
    private 'principal_id'?: string;
    private 'principal_is_root_user'?: UserInfoPrincipalIsRootUserEnum | string;
    public type?: string;
    private 'invoked_by'?: Array<string>;
    private 'session_context'?: SessionContext;
    public constructor() { 
    }
    public withId(id: string): UserInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UserInfo {
        this['name'] = name;
        return this;
    }
    public withUserName(userName: string): UserInfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withDomain(domain: BaseUser): UserInfo {
        this['domain'] = domain;
        return this;
    }
    public withAccountId(accountId: string): UserInfo {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string  | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId(): string | undefined {
        return this['account_id'];
    }
    public withAccessKeyId(accessKeyId: string): UserInfo {
        this['access_key_id'] = accessKeyId;
        return this;
    }
    public set accessKeyId(accessKeyId: string  | undefined) {
        this['access_key_id'] = accessKeyId;
    }
    public get accessKeyId(): string | undefined {
        return this['access_key_id'];
    }
    public withPrincipalUrn(principalUrn: string): UserInfo {
        this['principal_urn'] = principalUrn;
        return this;
    }
    public set principalUrn(principalUrn: string  | undefined) {
        this['principal_urn'] = principalUrn;
    }
    public get principalUrn(): string | undefined {
        return this['principal_urn'];
    }
    public withPrincipalId(principalId: string): UserInfo {
        this['principal_id'] = principalId;
        return this;
    }
    public set principalId(principalId: string  | undefined) {
        this['principal_id'] = principalId;
    }
    public get principalId(): string | undefined {
        return this['principal_id'];
    }
    public withPrincipalIsRootUser(principalIsRootUser: UserInfoPrincipalIsRootUserEnum | string): UserInfo {
        this['principal_is_root_user'] = principalIsRootUser;
        return this;
    }
    public set principalIsRootUser(principalIsRootUser: UserInfoPrincipalIsRootUserEnum | string  | undefined) {
        this['principal_is_root_user'] = principalIsRootUser;
    }
    public get principalIsRootUser(): UserInfoPrincipalIsRootUserEnum | string | undefined {
        return this['principal_is_root_user'];
    }
    public withType(type: string): UserInfo {
        this['type'] = type;
        return this;
    }
    public withInvokedBy(invokedBy: Array<string>): UserInfo {
        this['invoked_by'] = invokedBy;
        return this;
    }
    public set invokedBy(invokedBy: Array<string>  | undefined) {
        this['invoked_by'] = invokedBy;
    }
    public get invokedBy(): Array<string> | undefined {
        return this['invoked_by'];
    }
    public withSessionContext(sessionContext: SessionContext): UserInfo {
        this['session_context'] = sessionContext;
        return this;
    }
    public set sessionContext(sessionContext: SessionContext  | undefined) {
        this['session_context'] = sessionContext;
    }
    public get sessionContext(): SessionContext | undefined {
        return this['session_context'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UserInfoPrincipalIsRootUserEnum {
    TRUE = 'true',
    FALSE = 'false'
}
