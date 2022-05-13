import { RoleDomainAssignmentId } from './RoleDomainAssignmentId';
import { RoleEnterpriseProjectAssignmentId } from './RoleEnterpriseProjectAssignmentId';
import { RoleProjectAssignmentId } from './RoleProjectAssignmentId';


export class RoleAssignmentScope {
    public project?: RoleProjectAssignmentId;
    public domain?: RoleDomainAssignmentId;
    private 'enterprise_project'?: RoleEnterpriseProjectAssignmentId | undefined;
    public constructor() { 
    }
    public withProject(project: RoleProjectAssignmentId): RoleAssignmentScope {
        this['project'] = project;
        return this;
    }
    public withDomain(domain: RoleDomainAssignmentId): RoleAssignmentScope {
        this['domain'] = domain;
        return this;
    }
    public withEnterpriseProject(enterpriseProject: RoleEnterpriseProjectAssignmentId): RoleAssignmentScope {
        this['enterprise_project'] = enterpriseProject;
        return this;
    }
    public set enterpriseProject(enterpriseProject: RoleEnterpriseProjectAssignmentId | undefined) {
        this['enterprise_project'] = enterpriseProject;
    }
    public get enterpriseProject() {
        return this['enterprise_project'];
    }
}