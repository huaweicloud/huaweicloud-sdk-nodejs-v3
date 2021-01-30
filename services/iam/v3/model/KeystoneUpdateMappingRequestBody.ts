import { MappingOption } from './MappingOption';


export class KeystoneUpdateMappingRequestBody {
    public mapping: MappingOption;
    public constructor(mapping: any) { 
        this['mapping'] = mapping;
    }
    public withMapping(mapping: MappingOption): KeystoneUpdateMappingRequestBody {
        this['mapping'] = mapping;
        return this;
    }
}