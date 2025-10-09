

export class UpdateGroupReqBody {
    private 'new_group_name'?: string;
    private 'new_group_description'?: string;
    public constructor() { 
    }
    public withNewGroupName(newGroupName: string): UpdateGroupReqBody {
        this['new_group_name'] = newGroupName;
        return this;
    }
    public set newGroupName(newGroupName: string  | undefined) {
        this['new_group_name'] = newGroupName;
    }
    public get newGroupName(): string | undefined {
        return this['new_group_name'];
    }
    public withNewGroupDescription(newGroupDescription: string): UpdateGroupReqBody {
        this['new_group_description'] = newGroupDescription;
        return this;
    }
    public set newGroupDescription(newGroupDescription: string  | undefined) {
        this['new_group_description'] = newGroupDescription;
    }
    public get newGroupDescription(): string | undefined {
        return this['new_group_description'];
    }
}