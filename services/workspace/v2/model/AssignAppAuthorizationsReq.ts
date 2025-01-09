import { AccountInfo } from './AccountInfo';
import { AssignType } from './AssignType';


export class AssignAppAuthorizationsReq {
    private 'authorization_type'?: AssignType;
    public users?: Array<AccountInfo>;
    private 'del_users'?: Array<AccountInfo>;
    public constructor(authorizationType?: AssignType) { 
        this['authorization_type'] = authorizationType;
    }
    public withAuthorizationType(authorizationType: AssignType): AssignAppAuthorizationsReq {
        this['authorization_type'] = authorizationType;
        return this;
    }
    public set authorizationType(authorizationType: AssignType  | undefined) {
        this['authorization_type'] = authorizationType;
    }
    public get authorizationType(): AssignType | undefined {
        return this['authorization_type'];
    }
    public withUsers(users: Array<AccountInfo>): AssignAppAuthorizationsReq {
        this['users'] = users;
        return this;
    }
    public withDelUsers(delUsers: Array<AccountInfo>): AssignAppAuthorizationsReq {
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