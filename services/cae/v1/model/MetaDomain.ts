

export class MetaDomain {
    public id?: string;
    public name?: string;
    private 'created_at'?: Date;
    public constructor() { 
    }
    public withId(id: string): MetaDomain {
        this['id'] = id;
        return this;
    }
    public withName(name: string): MetaDomain {
        this['name'] = name;
        return this;
    }
    public withCreatedAt(createdAt: Date): MetaDomain {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
}