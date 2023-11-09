import { ExternalAccessesCreate } from './ExternalAccessesCreate';
import { FlavorId } from './FlavorId';
import { InstanceConfiguration } from './InstanceConfiguration';
import { ReferResourceCreate } from './ReferResourceCreate';


export class InstanceCreate {
    public name?: string;
    private 'environment_id'?: string;
    private 'flavor_id'?: FlavorId;
    public replica?: number;
    public artifacts?: { [key: string]: object; };
    public version?: string;
    public configuration?: InstanceConfiguration;
    public description?: string;
    private 'external_accesses'?: Array<ExternalAccessesCreate>;
    private 'refer_resources'?: Array<ReferResourceCreate>;
    public constructor(name?: string, environmentId?: string, flavorId?: FlavorId, replica?: number, artifacts?: { [key: string]: object; }, version?: string, referResources?: Array<ReferResourceCreate>) { 
        this['name'] = name;
        this['environment_id'] = environmentId;
        this['flavor_id'] = flavorId;
        this['replica'] = replica;
        this['artifacts'] = artifacts;
        this['version'] = version;
        this['refer_resources'] = referResources;
    }
    public withName(name: string): InstanceCreate {
        this['name'] = name;
        return this;
    }
    public withEnvironmentId(environmentId: string): InstanceCreate {
        this['environment_id'] = environmentId;
        return this;
    }
    public set environmentId(environmentId: string  | undefined) {
        this['environment_id'] = environmentId;
    }
    public get environmentId(): string | undefined {
        return this['environment_id'];
    }
    public withFlavorId(flavorId: FlavorId): InstanceCreate {
        this['flavor_id'] = flavorId;
        return this;
    }
    public set flavorId(flavorId: FlavorId  | undefined) {
        this['flavor_id'] = flavorId;
    }
    public get flavorId(): FlavorId | undefined {
        return this['flavor_id'];
    }
    public withReplica(replica: number): InstanceCreate {
        this['replica'] = replica;
        return this;
    }
    public withArtifacts(artifacts: { [key: string]: object; }): InstanceCreate {
        this['artifacts'] = artifacts;
        return this;
    }
    public withVersion(version: string): InstanceCreate {
        this['version'] = version;
        return this;
    }
    public withConfiguration(configuration: InstanceConfiguration): InstanceCreate {
        this['configuration'] = configuration;
        return this;
    }
    public withDescription(description: string): InstanceCreate {
        this['description'] = description;
        return this;
    }
    public withExternalAccesses(externalAccesses: Array<ExternalAccessesCreate>): InstanceCreate {
        this['external_accesses'] = externalAccesses;
        return this;
    }
    public set externalAccesses(externalAccesses: Array<ExternalAccessesCreate>  | undefined) {
        this['external_accesses'] = externalAccesses;
    }
    public get externalAccesses(): Array<ExternalAccessesCreate> | undefined {
        return this['external_accesses'];
    }
    public withReferResources(referResources: Array<ReferResourceCreate>): InstanceCreate {
        this['refer_resources'] = referResources;
        return this;
    }
    public set referResources(referResources: Array<ReferResourceCreate>  | undefined) {
        this['refer_resources'] = referResources;
    }
    public get referResources(): Array<ReferResourceCreate> | undefined {
        return this['refer_resources'];
    }
}