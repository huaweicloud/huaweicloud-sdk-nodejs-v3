

export class CreateNatTagRequestBody {
    public tag?: object;
    public constructor(tag?: object) { 
        this['tag'] = tag;
    }
    public withTag(tag: object): CreateNatTagRequestBody {
        this['tag'] = tag;
        return this;
    }
}