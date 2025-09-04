

export class ConfirmIaConfigRequestBody {
    public id?: string;
    public version?: string;
    public constructor(id?: string, version?: string) { 
        this['id'] = id;
        this['version'] = version;
    }
    public withId(id: string): ConfirmIaConfigRequestBody {
        this['id'] = id;
        return this;
    }
    public withVersion(version: string): ConfirmIaConfigRequestBody {
        this['version'] = version;
        return this;
    }
}