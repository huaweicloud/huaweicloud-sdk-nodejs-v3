import { CreatePrivateipOption } from './CreatePrivateipOption';


export class CreatePrivateipRequestBody {
    public privateips?: Array<CreatePrivateipOption>;
    public constructor(privateips?: Array<CreatePrivateipOption>) { 
        this['privateips'] = privateips;
    }
    public withPrivateips(privateips: Array<CreatePrivateipOption>): CreatePrivateipRequestBody {
        this['privateips'] = privateips;
        return this;
    }
}