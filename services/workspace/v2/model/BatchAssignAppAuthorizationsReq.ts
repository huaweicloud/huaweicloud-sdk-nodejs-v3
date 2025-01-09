import { AccountInfo } from './AccountInfo';
import { AssignType } from './AssignType';


export class BatchAssignAppAuthorizationsReq {
    private 'app_ids'?: Array<string>;
    private 'authorization_type'?: AssignType;
    public users?: Array<AccountInfo>;
    private 'del_users'?: Array<AccountInfo>;
    public constructor(appIds?: Array<string>, authorizationType?: AssignType) { 
        this['app_ids'] = appIds;
        this['authorization_type'] = authorizationType;
    }
    public withAppIds(appIds: Array<string>): BatchAssignAppAuthorizationsReq {
        this['app_ids'] = appIds;
        return this;
    }
    public set appIds(appIds: Array<string>  | undefined) {
        this['app_ids'] = appIds;
    }
    public get appIds(): Array<string> | undefined {
        return this['app_ids'];
    }
    public withAuthorizationType(authorizationType: AssignType): BatchAssignAppAuthorizationsReq {
        this['authorization_type'] = authorizationType;
        return this;
    }
    public set authorizationType(authorizationType: AssignType  | undefined) {
        this['authorization_type'] = authorizationType;
    }
    public get authorizationType(): AssignType | undefined {
        return this['authorization_type'];
    }
    public withUsers(users: Array<AccountInfo>): BatchAssignAppAuthorizationsReq {
        this['users'] = users;
        return this;
    }
    public withDelUsers(delUsers: Array<AccountInfo>): BatchAssignAppAuthorizationsReq {
        this['del_users'] = delUsers;
        return this;
    }
    public set delUsers(delUsers: Array<AccountInfo>  | undefined) {
        this['del_users'] = delUsers;
    }
    public get delUsers(): Array<AccountInfo> | undefined {
        return this['del_users'];
    }
}