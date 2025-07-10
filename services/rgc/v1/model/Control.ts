

export class Control {
    public identifier?: string;
    public name?: string;
    public description?: string;
    public guidance?: string;
    public resource?: Array<string>;
    public framework?: Array<string>;
    public service?: string;
    public implementation?: string;
    public behavior?: string;
    public owner?: string;
    public severity?: string;
    private 'control_objective'?: string;
    public version?: string;
    private 'release_date'?: Date;
    public constructor() { 
    }
    public withIdentifier(identifier: string): Control {
        this['identifier'] = identifier;
        return this;
    }
    public withName(name: string): Control {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): Control {
        this['description'] = description;
        return this;
    }
    public withGuidance(guidance: string): Control {
        this['guidance'] = guidance;
        return this;
    }
    public withResource(resource: Array<string>): Control {
        this['resource'] = resource;
        return this;
    }
    public withFramework(framework: Array<string>): Control {
        this['framework'] = framework;
        return this;
    }
    public withService(service: string): Control {
        this['service'] = service;
        return this;
    }
    public withImplementation(implementation: string): Control {
        this['implementation'] = implementation;
        return this;
    }
    public withBehavior(behavior: string): Control {
        this['behavior'] = behavior;
        return this;
    }
    public withOwner(owner: string): Control {
        this['owner'] = owner;
        return this;
    }
    public withSeverity(severity: string): Control {
        this['severity'] = severity;
        return this;
    }
    public withControlObjective(controlObjective: string): Control {
        this['control_objective'] = controlObjective;
        return this;
    }
    public set controlObjective(controlObjective: string  | undefined) {
        this['control_objective'] = controlObjective;
    }
    public get controlObjective(): string | undefined {
        return this['control_objective'];
    }
    public withVersion(version: string): Control {
        this['version'] = version;
        return this;
    }
    public withReleaseDate(releaseDate: Date): Control {
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