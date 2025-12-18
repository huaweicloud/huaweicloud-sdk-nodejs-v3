

export class UpdateAgencyPolicyRequestBody {
    private 'unbind_role_names'?: Array<string>;
    private 'bind_role_names'?: Array<string>;
    public constructor(unbindRoleNames?: Array<string>, bindRoleNames?: Array<string>) { 
        this['unbind_role_names'] = unbindRoleNames;
        this['bind_role_names'] = bindRoleNames;
    }
    public withUnbindRoleNames(unbindRoleNames: Array<string>): UpdateAgencyPolicyRequestBody {
        this['unbind_role_names'] = unbindRoleNames;
        return this;
    }
    public set unbindRoleNames(unbindRoleNames: Array<string>  | undefined) {
        this['unbind_role_names'] = unbindRoleNames;
    }
    public get unbindRoleNames(): Array<string> | undefined {
        return this['unbind_role_names'];
    }
    public withBindRoleNames(bindRoleNames: Array<string>): UpdateAgencyPolicyRequestBody {
        this['bind_role_names'] = bindRoleNames;
        return this;
    }
    public set bindRoleNames(bindRoleNames: Array<string>  | undefined) {
        this['bind_role_names'] = bindRoleNames;
    }
    public get bindRoleNames(): Array<string> | undefined {
        return this['bind_role_names'];
    }
}