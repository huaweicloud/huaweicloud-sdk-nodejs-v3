

export class UpdateTsvi {
    public id?: string;
    public enable?: boolean;
    public constructor(id?: string, enable?: boolean) { 
        this['id'] = id;
        this['enable'] = enable;
    }
    public withId(id: string): UpdateTsvi {
        this['id'] = id;
        return this;
    }
    public withEnable(enable: boolean): UpdateTsvi {
        this['enable'] = enable;
        return this;
    }
}