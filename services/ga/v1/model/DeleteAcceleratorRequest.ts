

export class DeleteAcceleratorRequest {
    private 'accelerator_id': string | undefined;
    public constructor(acceleratorId?: any) { 
        this['accelerator_id'] = acceleratorId;
    }
    public withAcceleratorId(acceleratorId: string): DeleteAcceleratorRequest {
        this['accelerator_id'] = acceleratorId;
        return this;
    }
    public set acceleratorId(acceleratorId: string | undefined) {
        this['accelerator_id'] = acceleratorId;
    }
    public get acceleratorId() {
        return this['accelerator_id'];
    }
}