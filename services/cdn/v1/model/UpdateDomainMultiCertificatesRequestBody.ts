import { UpdateDomainMultiCertificatesRequestBodyContent } from './UpdateDomainMultiCertificatesRequestBodyContent';


export class UpdateDomainMultiCertificatesRequestBody {
    public https?: UpdateDomainMultiCertificatesRequestBodyContent;
    public constructor() { 
    }
    public withHttps(https: UpdateDomainMultiCertificatesRequestBodyContent): UpdateDomainMultiCertificatesRequestBody {
        this['https'] = https;
        return this;
    }
}