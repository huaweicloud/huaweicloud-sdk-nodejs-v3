

export class ListInstanceGroupRequest {
    private 'datastore_type'?: string;
    private 'group_name'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(datastoreType?: string) { 
        this['datastore_type'] = datastoreType;
    }
    public withDatastoreType(datastoreType: string): ListInstanceGroupRequest {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): string | undefined {
        return this['datastore_type'];
    }
    public withGroupName(groupName: string): ListInstanceGroupRequest {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withOffset(offset: number): ListInstanceGroupRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListInstanceGroupRequest {
        this['limit'] = limit;
        return this;
    }
}