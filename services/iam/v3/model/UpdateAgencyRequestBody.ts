import { UpdateAgencyOption } from './UpdateAgencyOption';


export class UpdateAgencyRequestBody {
    public agency?: UpdateAgencyOption;
    public constructor(agency?: UpdateAgencyOption) { 
        this['agency'] = agency;
    }
    public withAgency(agency: UpdateAgencyOption): UpdateAgencyRequestBody {
        this['agency'] = agency;
        return this;
    }
}