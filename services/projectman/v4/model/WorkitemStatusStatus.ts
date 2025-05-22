

export class WorkitemStatusStatus {
    public id?: string;
    public name?: string;
    public type?: string;
    public description?: string;
    private 'parent_status_id'?: string;
    public constructor() { 
    }
    public withId(id: string): WorkitemStatusStatus {
        this['id'] = id;
        return this;
    }
    public withName(name: string): WorkitemStatusStatus {
        this['name'] = name;
        return this;
    }
    public withType(type: string): WorkitemStatusStatus {
        this['type'] = type;
        return this;
    }
    public withDescription(description: string): WorkitemStatusStatus {
        this['description'] = description;
        return this;
    }
    public withParentStatusId(parentStatusId: string): WorkitemStatusStatus {
        this['parent_status_id'] = parentStatusId;
        return this;
    }
    public set parentStatusId(parentStatusId: string  | undefined) {
        this['parent_status_id'] = parentStatusId;
    }
    public get parentStatusId(): string | undefined {
        return this['parent_status_id'];
    }
}