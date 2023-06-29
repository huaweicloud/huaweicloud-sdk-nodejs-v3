import { AgencyMapping } from './AgencyMapping';


export class AgencyMappingArray {
    private 'agency_mappings': Array<AgencyMapping> | undefined;
    public constructor(agencyMappings?: any) { 
        this['agency_mappings'] = agencyMappings;
    }
    public withAgencyMappings(agencyMappings: Array<AgencyMapping>): AgencyMappingArray {
        this['agency_mappings'] = agencyMappings;
        return this;
    }
    public set agencyMappings(agencyMappings: Array<AgencyMapping> | undefined) {
        this['agency_mappings'] = agencyMappings;
    }
    public get agencyMappings() {
        return this['agency_mappings'];
    }
}