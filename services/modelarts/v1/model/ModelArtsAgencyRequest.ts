import { AgencyServices } from './AgencyServices';


export class ModelArtsAgencyRequest {
    private 'agency_name_suffix'?: string;
    private 'agency_services'?: Array<AgencyServices>;
    public constructor() { 
    }
    public withAgencyNameSuffix(agencyNameSuffix: string): ModelArtsAgencyRequest {
        this['agency_name_suffix'] = agencyNameSuffix;
        return this;
    }
    public set agencyNameSuffix(agencyNameSuffix: string  | undefined) {
        this['agency_name_suffix'] = agencyNameSuffix;
    }
    public get agencyNameSuffix(): string | undefined {
        return this['agency_name_suffix'];
    }
    public withAgencyServices(agencyServices: Array<AgencyServices>): ModelArtsAgencyRequest {
        this['agency_services'] = agencyServices;
        return this;
    }
    public set agencyServices(agencyServices: Array<AgencyServices>  | undefined) {
        this['agency_services'] = agencyServices;
    }
    public get agencyServices(): Array<AgencyServices> | undefined {
        return this['agency_services'];
    }
}