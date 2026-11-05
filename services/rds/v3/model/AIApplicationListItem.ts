

export class AIApplicationListItem {
    public id?: string;
    public name?: string;
    public status?: string;
    private 'managed_instance_id'?: string;
    public constructor() { 
    }
    public withId(id: string): AIApplicationListItem {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AIApplicationListItem {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): AIApplicationListItem {
        this['status'] = status;
        return this;
    }
    public withManagedInstanceId(managedInstanceId: string): AIApplicationListItem {
        this['managed_instance_id'] = managedInstanceId;
        return this;
    }
    public set managedInstanceId(managedInstanceId: string  | undefined) {
        this['managed_instance_id'] = managedInstanceId;
    }
    public get managedInstanceId(): string | undefined {
        return this['managed_instance_id'];
    }
}