

export class AddInstanceGroupRequestBody {
    private 'datastore_type'?: string;
    private 'group_name'?: string;
    public description?: string;
    public constructor(datastoreType?: string, groupName?: string) { 
        this['datastore_type'] = datastoreType;
        this['group_name'] = groupName;
    }
    public withDatastoreType(datastoreType: string): AddInstanceGroupRequestBody {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): string | undefined {
        return this['datastore_type'];
    }
    public withGroupName(groupName: string): AddInstanceGroupRequestBody {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withDescription(description: string): AddInstanceGroupRequestBody {
        this['description'] = description;
        return this;
    }
}