

export class UpdateJobResourceOwnerRequestBody {
    private 'new_owner'?: string;
    private 'group_name'?: string;
    private 'resource_name'?: string;
    public constructor(newOwner?: string, groupName?: string) { 
        this['new_owner'] = newOwner;
        this['group_name'] = groupName;
    }
    public withNewOwner(newOwner: string): UpdateJobResourceOwnerRequestBody {
        this['new_owner'] = newOwner;
        return this;
    }
    public set newOwner(newOwner: string  | undefined) {
        this['new_owner'] = newOwner;
    }
    public get newOwner(): string | undefined {
        return this['new_owner'];
    }
    public withGroupName(groupName: string): UpdateJobResourceOwnerRequestBody {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withResourceName(resourceName: string): UpdateJobResourceOwnerRequestBody {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
}