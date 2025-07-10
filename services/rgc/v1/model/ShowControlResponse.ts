import { Artifact } from './Artifact';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowControlResponse extends SdkResponse {
    public identifier?: string;
    public implementation?: string;
    public guidance?: string;
    public resource?: Array<string>;
    public service?: string;
    public behavior?: string;
    private 'control_objective'?: string;
    public framework?: Array<string>;
    public artifacts?: Array<Artifact>;
    public aliases?: Array<string>;
    public owner?: string;
    public severity?: string;
    public version?: string;
    private 'release_date'?: Date;
    public constructor() { 
        super();
    }
    public withIdentifier(identifier: string): ShowControlResponse {
        this['identifier'] = identifier;
        return this;
    }
    public withImplementation(implementation: string): ShowControlResponse {
        this['implementation'] = implementation;
        return this;
    }
    public withGuidance(guidance: string): ShowControlResponse {
        this['guidance'] = guidance;
        return this;
    }
    public withResource(resource: Array<string>): ShowControlResponse {
        this['resource'] = resource;
        return this;
    }
    public withService(service: string): ShowControlResponse {
        this['service'] = service;
        return this;
    }
    public withBehavior(behavior: string): ShowControlResponse {
        this['behavior'] = behavior;
        return this;
    }
    public withControlObjective(controlObjective: string): ShowControlResponse {
        this['control_objective'] = controlObjective;
        return this;
    }
    public set controlObjective(controlObjective: string  | undefined) {
        this['control_objective'] = controlObjective;
    }
    public get controlObjective(): string | undefined {
        return this['control_objective'];
    }
    public withFramework(framework: Array<string>): ShowControlResponse {
        this['framework'] = framework;
        return this;
    }
    public withArtifacts(artifacts: Array<Artifact>): ShowControlResponse {
        this['artifacts'] = artifacts;
        return this;
    }
    public withAliases(aliases: Array<string>): ShowControlResponse {
        this['aliases'] = aliases;
        return this;
    }
    public withOwner(owner: string): ShowControlResponse {
        this['owner'] = owner;
        return this;
    }
    public withSeverity(severity: string): ShowControlResponse {
        this['severity'] = severity;
        return this;
    }
    public withVersion(version: string): ShowControlResponse {
        this['version'] = version;
        return this;
    }
    public withReleaseDate(releaseDate: Date): ShowControlResponse {
        this['release_date'] = releaseDate;
        return this;
    }
    public set releaseDate(releaseDate: Date  | undefined) {
        this['release_date'] = releaseDate;
    }
    public get releaseDate(): Date | undefined {
        return this['release_date'];
    }
}