import { TemplatePublicIpOption } from './TemplatePublicIpOption';


export class TemplateInternetAccessOption {
    public publicip?: TemplatePublicIpOption;
    public constructor() { 
    }
    public withPublicip(publicip: TemplatePublicIpOption): TemplateInternetAccessOption {
        this['publicip'] = publicip;
        return this;
    }
}