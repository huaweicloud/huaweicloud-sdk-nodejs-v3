import { UpdatePublicipOption } from './UpdatePublicipOption';


export class UpdatePublicipsRequestBody {
    public publicip?: UpdatePublicipOption;
    public constructor(publicip?: UpdatePublicipOption) { 
        this['publicip'] = publicip;
    }
    public withPublicip(publicip: UpdatePublicipOption): UpdatePublicipsRequestBody {
        this['publicip'] = publicip;
        return this;
    }
}