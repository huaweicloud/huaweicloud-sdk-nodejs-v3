

export class GcbSpecCodeId {
    private 'spec_code_id'?: string;
    public constructor() { 
    }
    public withSpecCodeId(specCodeId: string): GcbSpecCodeId {
        this['spec_code_id'] = specCodeId;
        return this;
    }
    public set specCodeId(specCodeId: string  | undefined) {
        this['spec_code_id'] = specCodeId;
    }
    public get specCodeId(): string | undefined {
        return this['spec_code_id'];
    }
}