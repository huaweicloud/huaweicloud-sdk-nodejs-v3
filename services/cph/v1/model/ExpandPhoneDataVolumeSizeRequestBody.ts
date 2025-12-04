import { PhoneDataVolumeSize } from './PhoneDataVolumeSize';


export class ExpandPhoneDataVolumeSizeRequestBody {
    public phones?: Array<PhoneDataVolumeSize>;
    public constructor(phones?: Array<PhoneDataVolumeSize>) { 
        this['phones'] = phones;
    }
    public withPhones(phones: Array<PhoneDataVolumeSize>): ExpandPhoneDataVolumeSizeRequestBody {
        this['phones'] = phones;
        return this;
    }
}