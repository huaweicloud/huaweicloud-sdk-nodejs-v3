import { DisassociatePublicipsOption } from './DisassociatePublicipsOption';


export class DisassociatePublicipsRequestBody {
    public publicip?: DisassociatePublicipsOption;
    public constructor(publicip?: DisassociatePublicipsOption) { 
        this['publicip'] = publicip;
    }
    public withPublicip(publicip: DisassociatePublicipsOption): DisassociatePublicipsRequestBody {
        this['publicip'] = publicip;
        return this;
    }
}