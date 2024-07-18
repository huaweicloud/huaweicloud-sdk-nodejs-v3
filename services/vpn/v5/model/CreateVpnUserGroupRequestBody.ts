import { CreateVpnUserGroupRequestBodyContent } from './CreateVpnUserGroupRequestBodyContent';


export class CreateVpnUserGroupRequestBody {
    private 'user_group'?: CreateVpnUserGroupRequestBodyContent;
    public constructor(userGroup?: CreateVpnUserGroupRequestBodyContent) { 
        this['user_group'] = userGroup;
    }
    public withUserGroup(userGroup: CreateVpnUserGroupRequestBodyContent): CreateVpnUserGroupRequestBody {
        this['user_group'] = userGroup;
        return this;
    }
    public set userGroup(userGroup: CreateVpnUserGroupRequestBodyContent  | undefined) {
        this['user_group'] = userGroup;
    }
    public get userGroup(): CreateVpnUserGroupRequestBodyContent | undefined {
        return this['user_group'];
    }
}