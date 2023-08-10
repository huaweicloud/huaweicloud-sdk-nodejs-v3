

export class DeleteFsDirRequestBody {
    public path?: string;
    public constructor(path?: string) { 
        this['path'] = path;
    }
    public withPath(path: string): DeleteFsDirRequestBody {
        this['path'] = path;
        return this;
    }
}