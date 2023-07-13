import { UpdateAcceleratorOption } from './UpdateAcceleratorOption';


export class UpdateAcceleratorRequestBody {
    public accelerator: UpdateAcceleratorOption;
    public constructor(accelerator?: any) { 
        this['accelerator'] = accelerator;
    }
    public withAccelerator(accelerator: UpdateAcceleratorOption): UpdateAcceleratorRequestBody {
        this['accelerator'] = accelerator;
        return this;
    }
}