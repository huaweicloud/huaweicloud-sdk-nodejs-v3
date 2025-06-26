

export class TargetControl {
    private 'manage_account_id'?: string;
    private 'control_identifier'?: string;
    public state?: string;
    public version?: string;
    public name?: string;
    public description?: string;
    private 'control_objective'?: string;
    public behavior?: string;
    public owner?: string;
    private 'regional_preference'?: string;
    public guidance?: string;
    public service?: string;
    public implementation?: string;
    public constructor() { 
    }
    public withManageAccountId(manageAccountId: string): TargetControl {
        this['manage_account_id'] = manageAccountId;
        return this;
    }
    public set manageAccountId(manageAccountId: string  | undefined) {
        this['manage_account_id'] = manageAccountId;
    }
    public get manageAccountId(): string | undefined {
        return this['manage_account_id'];
    }
    public withControlIdentifier(controlIdentifier: string): TargetControl {
        this['control_identifier'] = controlIdentifier;
        return this;
    }
    public set controlIdentifier(controlIdentifier: string  | undefined) {
        this['control_identifier'] = controlIdentifier;
    }
    public get controlIdentifier(): string | undefined {
        return this['control_identifier'];
    }
    public withState(state: string): TargetControl {
        this['state'] = state;
        return this;
    }
    public withVersion(version: string): TargetControl {
        this['version'] = version;
        return this;
    }
    public withName(name: string): TargetControl {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): TargetControl {
        this['description'] = description;
        return this;
    }
    public withControlObjective(controlObjective: string): TargetControl {
        this['control_objective'] = controlObjective;
        return this;
    }
    public set controlObjective(controlObjective: string  | undefined) {
        this['control_objective'] = controlObjective;
    }
    public get controlObjective(): string | undefined {
        return this['control_objective'];
    }
    public withBehavior(behavior: string): TargetControl {
        this['behavior'] = behavior;
        return this;
    }
    public withOwner(owner: string): TargetControl {
        this['owner'] = owner;
        return this;
    }
    public withRegionalPreference(regionalPreference: string): TargetControl {
        this['regional_preference'] = regionalPreference;
        return this;
    }
    public set regionalPreference(regionalPreference: string  | undefined) {
        this['regional_preference'] = regionalPreference;
    }
    public get regionalPreference(): string | undefined {
        return this['regional_preference'];
    }
    public withGuidance(guidance: string): TargetControl {
        this['guidance'] = guidance;
        return this;
    }
    public withService(service: string): TargetControl {
        this['service'] = service;
        return this;
    }
    public withImplementation(implementation: string): TargetControl {
        this['implementation'] = implementation;
        return this;
    }
}