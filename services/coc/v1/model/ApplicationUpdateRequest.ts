

export class ApplicationUpdateRequest {
    public name?: string;
    public description?: string;
    private 'is_collection'?: boolean;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): ApplicationUpdateRequest {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ApplicationUpdateRequest {
        this['description'] = description;
        return this;
    }
    public withIsCollection(isCollection: boolean): ApplicationUpdateRequest {
        this['is_collection'] = isCollection;
        return this;
    }
    public set isCollection(isCollection: boolean  | undefined) {
        this['is_collection'] = isCollection;
    }
    public get isCollection(): boolean | undefined {
        return this['is_collection'];
    }
}