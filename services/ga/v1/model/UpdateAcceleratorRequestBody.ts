import { UpdateAcceleratorOption } from './UpdateAcceleratorOption';


export class UpdateAcceleratorRequestBody {
    public accelerator?: UpdateAcceleratorOption;
    public constructor(accelerator?: UpdateAcceleratorOption) { 
        this['accelerator'] = accelerator;
    }
    public withAccelerator(accelerator: UpdateAcceleratorOption): UpdateAcceleratorRequestBody {
        this['accelerator'] = accelerator;
        return this;
    }
}