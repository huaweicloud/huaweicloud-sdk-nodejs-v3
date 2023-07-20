

export class RenameInstanceRequestBody {
    public instancename?: string;
    public constructor(instancename?: string) { 
        this['instancename'] = instancename;
    }
    public withInstancename(instancename: string): RenameInstanceRequestBody {
        this['instancename'] = instancename;
        return this;
    }
}