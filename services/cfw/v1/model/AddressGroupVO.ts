

export class AddressGroupVO {
    private 'set_id'?: string;
    public name?: string;
    public constructor() { 
    }
    public withSetId(setId: string): AddressGroupVO {
        this['set_id'] = setId;
        return this;
    }
    public set setId(setId: string  | undefined) {
        this['set_id'] = setId;
    }
    public get setId(): string | undefined {
        return this['set_id'];
    }
    public withName(name: string): AddressGroupVO {
        this['name'] = name;
        return this;
    }
}