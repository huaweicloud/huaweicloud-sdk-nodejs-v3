import { PropertyToUpdate } from './PropertyToUpdate';


export class UpdateCloudPhonePropertyRequestBody {
    public phones?: Array<PropertyToUpdate>;
    public constructor(phones?: Array<PropertyToUpdate>) { 
        this['phones'] = phones;
    }
    public withPhones(phones: Array<PropertyToUpdate>): UpdateCloudPhonePropertyRequestBody {
        this['phones'] = phones;
        return this;
    }
}