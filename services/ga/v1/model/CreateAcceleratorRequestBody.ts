import { CreateAcceleratorOption } from './CreateAcceleratorOption';


export class CreateAcceleratorRequestBody {
    public accelerator: CreateAcceleratorOption;
    public constructor(accelerator?: any) { 
        this['accelerator'] = accelerator;
    }
    public withAccelerator(accelerator: CreateAcceleratorOption): CreateAcceleratorRequestBody {
        this['accelerator'] = accelerator;
        return this;
    }
}