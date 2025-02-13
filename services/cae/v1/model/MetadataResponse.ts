

export class MetadataResponse {
    public id?: string;
    public name?: string;
    public annotations?: { [key: string]: string; };
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public constructor() { 
    }
    public withId(id: string): MetadataResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): MetadataResponse {
        this['name'] = name;
        return this;
    }
    public withAnnotations(annotations: { [key: string]: string; }): MetadataResponse {
        this['annotations'] = annotations;
        return this;
    }
    public withCreatedAt(createdAt: Date): MetadataResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): MetadataResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
}