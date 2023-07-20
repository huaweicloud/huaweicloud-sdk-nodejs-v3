import { AgencyMapping } from './AgencyMapping';


export class AgencyMappingArray {
    private 'agency_mappings'?: Array<AgencyMapping>;
    public constructor(agencyMappings?: Array<AgencyMapping>) { 
        this['agency_mappings'] = agencyMappings;
    }
    public withAgencyMappings(agencyMappings: Array<AgencyMapping>): AgencyMappingArray {
        this['agency_mappings'] = agencyMappings;
        return this;
    }
    public set agencyMappings(agencyMappings: Array<AgencyMapping>  | undefined) {
        this['agency_mappings'] = agencyMappings;
    }
    public get agencyMappings(): Array<AgencyMapping> | undefined {
        return this['agency_mappings'];
    }
}