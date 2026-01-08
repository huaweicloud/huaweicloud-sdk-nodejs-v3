import { Dependency } from './Dependency';


export class AddressGroupDependency {
    public id?: string;
    private 'enterprise_project_id'?: string;
    public dependency?: Array<Dependency>;
    public constructor(id?: string, enterpriseProjectId?: string, dependency?: Array<Dependency>) { 
        this['id'] = id;
        this['enterprise_project_id'] = enterpriseProjectId;
        this['dependency'] = dependency;
    }
    public withId(id: string): AddressGroupDependency {
        this['id'] = id;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): AddressGroupDependency {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withDependency(dependency: Array<Dependency>): AddressGroupDependency {
        this['dependency'] = dependency;
        return this;
    }
}