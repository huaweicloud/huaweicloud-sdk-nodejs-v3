import { Organization } from './Organization';
import { Role } from './Role';


export class CreateServiceAgencyRequestBody {
    public organizations?: Array<Organization>;
    private 'role_descriptions'?: Array<Role>;
    public constructor() { 
    }
    public withOrganizations(organizations: Array<Organization>): CreateServiceAgencyRequestBody {
        this['organizations'] = organizations;
        return this;
    }
    public withRoleDescriptions(roleDescriptions: Array<Role>): CreateServiceAgencyRequestBody {
        this['role_descriptions'] = roleDescriptions;
        return this;
    }
    public set roleDescriptions(roleDescriptions: Array<Role>  | undefined) {
        this['role_descriptions'] = roleDescriptions;
    }
    public get roleDescriptions(): Array<Role> | undefined {
        return this['role_descriptions'];
    }
}