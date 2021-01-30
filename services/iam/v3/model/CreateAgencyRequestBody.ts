import { CreateAgencyOption } from './CreateAgencyOption';


export class CreateAgencyRequestBody {
    public agency: CreateAgencyOption;
    public constructor(agency: any) { 
        this['agency'] = agency;
    }
    public withAgency(agency: CreateAgencyOption): CreateAgencyRequestBody {
        this['agency'] = agency;
        return this;
    }
}