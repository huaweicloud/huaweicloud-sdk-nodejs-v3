

export class UpdateP2cVgwRequestBodyContent {
    public name?: string;
    private 'eip_id'?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateP2cVgwRequestBodyContent {
        this['name'] = name;
        return this;
    }
    public withEipId(eipId: string): UpdateP2cVgwRequestBodyContent {
        this['eip_id'] = eipId;
        return this;
    }
    public set eipId(eipId: string  | undefined) {
        this['eip_id'] = eipId;
    }
    public get eipId(): string | undefined {
        return this['eip_id'];
    }
}