

export class ApplicationMetadata {
    public id?: string;
    public name?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public constructor() { 
    }
    public withId(id: string): ApplicationMetadata {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ApplicationMetadata {
        this['name'] = name;
        return this;
    }
    public withCreatedAt(createdAt: string): ApplicationMetadata {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): ApplicationMetadata {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
}