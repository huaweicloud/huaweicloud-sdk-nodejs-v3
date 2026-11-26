

export class Owner {
    public id?: string;
    private 'display_name'?: string;
    public constructor() { 
    }
    public withId(id: string): Owner {
        this['id'] = id;
        return this;
    }
    public withDisplayName(displayName: string): Owner {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
}