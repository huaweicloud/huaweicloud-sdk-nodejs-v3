import { Property } from './Property';


export class UpdateCloudPhonePropertyRequestBody {
    public phones?: Array<Property>;
    public constructor(phones?: Array<Property>) { 
        this['phones'] = phones;
    }
    public withPhones(phones: Array<Property>): UpdateCloudPhonePropertyRequestBody {
        this['phones'] = phones;
        return this;
    }
}