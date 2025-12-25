import { Department } from './Department';
import { GovernanceUser } from './GovernanceUser';
import { Properties } from './Properties';
import { ResourceEnvironment } from './ResourceEnvironment';


export class ResourceDetail {
    public id?: string;
    public name?: string;
    public provider?: string;
    public type?: string;
    public checksum?: string;
    public created?: string;
    private 'provisioning_state'?: string;
    public environment?: ResourceEnvironment;
    public department?: Department;
    private 'governance_user'?: GovernanceUser;
    public level?: number;
    public properties?: Properties;
    public constructor(id?: string, name?: string, provider?: string, type?: string, environment?: ResourceEnvironment, properties?: Properties) { 
        this['id'] = id;
        this['name'] = name;
        this['provider'] = provider;
        this['type'] = type;
        this['environment'] = environment;
        this['properties'] = properties;
    }
    public withId(id: string): ResourceDetail {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ResourceDetail {
        this['name'] = name;
        return this;
    }
    public withProvider(provider: string): ResourceDetail {
        this['provider'] = provider;
        return this;
    }
    public withType(type: string): ResourceDetail {
        this['type'] = type;
        return this;
    }
    public withChecksum(checksum: string): ResourceDetail {
        this['checksum'] = checksum;
        return this;
    }
    public withCreated(created: string): ResourceDetail {
        this['created'] = created;
        return this;
    }
    public withProvisioningState(provisioningState: string): ResourceDetail {
        this['provisioning_state'] = provisioningState;
        return this;
    }
    public set provisioningState(provisioningState: string  | undefined) {
        this['provisioning_state'] = provisioningState;
    }
    public get provisioningState(): string | undefined {
        return this['provisioning_state'];
    }
    public withEnvironment(environment: ResourceEnvironment): ResourceDetail {
        this['environment'] = environment;
        return this;
    }
    public withDepartment(department: Department): ResourceDetail {
        this['department'] = department;
        return this;
    }
    public withGovernanceUser(governanceUser: GovernanceUser): ResourceDetail {
        this['governance_user'] = governanceUser;
        return this;
    }
    public set governanceUser(governanceUser: GovernanceUser  | undefined) {
        this['governance_user'] = governanceUser;
    }
    public get governanceUser(): GovernanceUser | undefined {
        return this['governance_user'];
    }
    public withLevel(level: number): ResourceDetail {
        this['level'] = level;
        return this;
    }
    public withProperties(properties: Properties): ResourceDetail {
        this['properties'] = properties;
        return this;
    }
}