

export class ShowAcceleratorRequest {
    private 'accelerator_id'?: string;
    public constructor(acceleratorId?: string) { 
        this['accelerator_id'] = acceleratorId;
    }
    public withAcceleratorId(acceleratorId: string): ShowAcceleratorRequest {
        this['accelerator_id'] = acceleratorId;
        return this;
    }
    public set acceleratorId(acceleratorId: string  | undefined) {
        this['accelerator_id'] = acceleratorId;
    }
    public get acceleratorId(): string | undefined {
        return this['accelerator_id'];
    }
}