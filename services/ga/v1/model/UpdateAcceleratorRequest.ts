import { UpdateAcceleratorRequestBody } from './UpdateAcceleratorRequestBody';


export class UpdateAcceleratorRequest {
    private 'accelerator_id'?: string;
    public body?: UpdateAcceleratorRequestBody;
    public constructor(acceleratorId?: string) { 
        this['accelerator_id'] = acceleratorId;
    }
    public withAcceleratorId(acceleratorId: string): UpdateAcceleratorRequest {
        this['accelerator_id'] = acceleratorId;
        return this;
    }
    public set acceleratorId(acceleratorId: string  | undefined) {
        this['accelerator_id'] = acceleratorId;
    }
    public get acceleratorId(): string | undefined {
        return this['accelerator_id'];
    }
    public withBody(body: UpdateAcceleratorRequestBody): UpdateAcceleratorRequest {
        this['body'] = body;
        return this;
    }
}