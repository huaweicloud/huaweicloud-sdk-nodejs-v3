

export class ListFunctionApplicationResult {
    public id?: string;
    public name?: string;
    public status?: string;
    private 'last_modified_time'?: number;
    public description?: string;
    public constructor() { 
    }
    public withId(id: string): ListFunctionApplicationResult {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListFunctionApplicationResult {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): ListFunctionApplicationResult {
        this['status'] = status;
        return this;
    }
    public withLastModifiedTime(lastModifiedTime: number): ListFunctionApplicationResult {
        this['last_modified_time'] = lastModifiedTime;
        return this;
    }
    public set lastModifiedTime(lastModifiedTime: number  | undefined) {
        this['last_modified_time'] = lastModifiedTime;
    }
    public get lastModifiedTime(): number | undefined {
        return this['last_modified_time'];
    }
    public withDescription(description: string): ListFunctionApplicationResult {
        this['description'] = description;
        return this;
    }
}