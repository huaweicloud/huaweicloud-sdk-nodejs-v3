import { MappingOption } from './MappingOption';


export class KeystoneCreateMappingRequestBody {
    public mapping?: MappingOption;
    public constructor(mapping?: MappingOption) { 
        this['mapping'] = mapping;
    }
    public withMapping(mapping: MappingOption): KeystoneCreateMappingRequestBody {
        this['mapping'] = mapping;
        return this;
    }
}