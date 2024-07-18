import { UpdateVpnUserGroupRequestBodyContent } from './UpdateVpnUserGroupRequestBodyContent';


export class UpdateVpnUserGroupRequestBody {
    private 'user_group'?: UpdateVpnUserGroupRequestBodyContent;
    public constructor() { 
    }
    public withUserGroup(userGroup: UpdateVpnUserGroupRequestBodyContent): UpdateVpnUserGroupRequestBody {
        this['user_group'] = userGroup;
        return this;
    }
    public set userGroup(userGroup: UpdateVpnUserGroupRequestBodyContent  | undefined) {
        this['user_group'] = userGroup;
    }
    public get userGroup(): UpdateVpnUserGroupRequestBodyContent | undefined {
        return this['user_group'];
    }
}