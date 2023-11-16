

export class UpdateProtectedIpBody {
    public id?: string;
    public tag?: string;
    public constructor(id?: string, tag?: string) { 
        this['id'] = id;
        this['tag'] = tag;
    }
    public withId(id: string): UpdateProtectedIpBody {
        this['id'] = id;
        return this;
    }
    public withTag(tag: string): UpdateProtectedIpBody {
        this['tag'] = tag;
        return this;
    }
}