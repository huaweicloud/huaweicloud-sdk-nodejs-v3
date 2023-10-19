

export class ResizeInstanceReq {
    private 'spec_id'?: string;
    public constructor() { 
    }
    public withSpecId(specId: string): ResizeInstanceReq {
        this['spec_id'] = specId;
        return this;
    }
    public set specId(specId: string  | undefined) {
        this['spec_id'] = specId;
    }
    public get specId(): string | undefined {
        return this['spec_id'];
    }
}