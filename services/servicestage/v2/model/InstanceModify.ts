import { ExternalAccesses } from './ExternalAccesses';
import { FlavorId } from './FlavorId';
import { ReferResourceCreate } from './ReferResourceCreate';


export class InstanceModify {
    public version?: string;
    private 'flavor_id'?: FlavorId;
    public artifacts?: { [key: string]: object; };
    public configuration?: { [key: string]: object; };
    public description?: string;
    private 'external_accesses'?: Array<ExternalAccesses>;
    private 'refer_resources'?: Array<ReferResourceCreate>;
    public constructor(version?: string) { 
        this['version'] = version;
    }
    public withVersion(version: string): InstanceModify {
        this['version'] = version;
        return this;
    }
    public withFlavorId(flavorId: FlavorId): InstanceModify {
        this['flavor_id'] = flavorId;
        return this;
    }
    public set flavorId(flavorId: FlavorId  | undefined) {
        this['flavor_id'] = flavorId;
    }
    public get flavorId(): FlavorId | undefined {
        return this['flavor_id'];
    }
    public withArtifacts(artifacts: { [key: string]: object; }): InstanceModify {
        this['artifacts'] = artifacts;
        return this;
    }
    public withConfiguration(configuration: { [key: string]: object; }): InstanceModify {
        this['configuration'] = configuration;
        return this;
    }
    public withDescription(description: string): InstanceModify {
        this['description'] = description;
        return this;
    }
    public withExternalAccesses(externalAccesses: Array<ExternalAccesses>): InstanceModify {
        this['external_accesses'] = externalAccesses;
        return this;
    }
    public set externalAccesses(externalAccesses: Array<ExternalAccesses>  | undefined) {
        this['external_accesses'] = externalAccesses;
    }
    public get externalAccesses(): Array<ExternalAccesses> | undefined {
        return this['external_accesses'];
    }
    public withReferResources(referResources: Array<ReferResourceCreate>): InstanceModify {
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