

export class CreateDataspaceRequestBody {
    private 'dataspace_name'?: string;
    public description?: string;
    public constructor(dataspaceName?: string, description?: string) { 
        this['dataspace_name'] = dataspaceName;
        this['description'] = description;
    }
    public withDataspaceName(dataspaceName: string): CreateDataspaceRequestBody {
        this['dataspace_name'] = dataspaceName;
        return this;
    }
    public set dataspaceName(dataspaceName: string  | undefined) {
        this['dataspace_name'] = dataspaceName;
    }
    public get dataspaceName(): string | undefined {
        return this['dataspace_name'];
    }
    public withDescription(description: string): CreateDataspaceRequestBody {
        this['description'] = description;
        return this;
    }
}