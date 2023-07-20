import { AssociatePublicipsOption } from './AssociatePublicipsOption';


export class AssociatePublicipsRequestBody {
    public publicip?: AssociatePublicipsOption;
    public constructor(publicip?: AssociatePublicipsOption) { 
        this['publicip'] = publicip;
    }
    public withPublicip(publicip: AssociatePublicipsOption): AssociatePublicipsRequestBody {
        this['publicip'] = publicip;
        return this;
    }
}