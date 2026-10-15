

export class ChangeFlavorReq {
    private 'spec_type'?: string;
    public constructor(specType?: string) { 
        this['spec_type'] = specType;
    }
    public withSpecType(specType: string): ChangeFlavorReq {
        this['spec_type'] = specType;
        return this;
    }
    public set specType(specType: string  | undefined) {
        this['spec_type'] = specType;
    }
    public get specType(): string | undefined {
        return this['spec_type'];
    }
}