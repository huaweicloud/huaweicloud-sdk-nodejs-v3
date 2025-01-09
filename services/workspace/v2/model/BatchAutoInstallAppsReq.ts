import { AccountInfo } from './AccountInfo';
import { AssignType } from './AssignType';


export class BatchAutoInstallAppsReq {
    private 'app_ids'?: Array<string>;
    private 'assign_scope'?: AssignType;
    public users?: Array<AccountInfo>;
    public constructor(appIds?: Array<string>, assignScope?: AssignType) { 
        this['app_ids'] = appIds;
        this['assign_scope'] = assignScope;
    }
    public withAppIds(appIds: Array<string>): BatchAutoInstallAppsReq {
        this['app_ids'] = appIds;
        return this;
    }
    public set appIds(appIds: Array<string>  | undefined) {
        this['app_ids'] = appIds;
    }
    public get appIds(): Array<string> | undefined {
        return this['app_ids'];
    }
    public withAssignScope(assignScope: AssignType): BatchAutoInstallAppsReq {
        this['assign_scope'] = assignScope;
        return this;
    }
    public set assignScope(assignScope: AssignType  | undefined) {
        this['assign_scope'] = assignScope;
    }
    public get assignScope(): AssignType | undefined {
        return this['assign_scope'];
    }
    public withUsers(users: Array<AccountInfo>): BatchAutoInstallAppsReq {
        this['users'] = users;
        return this;
    }
}