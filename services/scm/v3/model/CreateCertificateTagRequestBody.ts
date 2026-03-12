import { ScsResourceTag } from './ScsResourceTag';


export class CreateCertificateTagRequestBody {
    public tag?: ScsResourceTag;
    public constructor(tag?: ScsResourceTag) { 
        this['tag'] = tag;
    }
    public withTag(tag: ScsResourceTag): CreateCertificateTagRequestBody {
        this['tag'] = tag;
        return this;
    }
}