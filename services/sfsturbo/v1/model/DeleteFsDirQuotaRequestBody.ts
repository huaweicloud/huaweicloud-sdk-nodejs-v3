

export class DeleteFsDirQuotaRequestBody {
    public path?: string;
    public constructor(path?: string) { 
        this['path'] = path;
    }
    public withPath(path: string): DeleteFsDirQuotaRequestBody {
        this['path'] = path;
        return this;
    }
}