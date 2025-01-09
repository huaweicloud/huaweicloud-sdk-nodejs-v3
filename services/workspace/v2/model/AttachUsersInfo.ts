

export class AttachUsersInfo {
    public id?: string;
    public name?: string;
    private 'user_group'?: string;
    public type?: string;
    public constructor() { 
    }
    public withId(id: string): AttachUsersInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AttachUsersInfo {
        this['name'] = name;
        return this;
    }
    public withUserGroup(userGroup: string): AttachUsersInfo {
        this['user_group'] = userGroup;
        return this;
    }
    public set userGroup(userGroup: string  | undefined) {
        this['user_group'] = userGroup;
    }
    public get userGroup(): string | undefined {
        return this['user_group'];
    }
    public withType(type: string): AttachUsersInfo {
        this['type'] = type;
        return this;
    }
}