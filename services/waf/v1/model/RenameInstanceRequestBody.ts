

export class RenameInstanceRequestBody {
    public instancename: string;
    public constructor(instancename?: any) { 
        this['instancename'] = instancename;
    }
    public withInstancename(instancename: string): RenameInstanceRequestBody {
        this['instancename'] = instancename;
        return this;
    }
}