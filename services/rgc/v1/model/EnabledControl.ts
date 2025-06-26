

export class EnabledControl {
    private 'manage_account_id'?: string;
    private 'control_identifier'?: string;
    public name?: string;
    public description?: string;
    private 'control_objective'?: string;
    public behavior?: string;
    public owner?: string;
    private 'regional_preference'?: string;
    public constructor() { 
    }
    public withManageAccountId(manageAccountId: string): EnabledControl {
        this['manage_account_id'] = manageAccountId;
        return this;
    }
    public set manageAccountId(manageAccountId: string  | undefined) {
        this['manage_account_id'] = manageAccountId;
    }
    public get manageAccountId(): string | undefined {
        return this['manage_account_id'];
    }
    public withControlIdentifier(controlIdentifier: string): EnabledControl {
        this['control_identifier'] = controlIdentifier;
        return this;
    }
    public set controlIdentifier(controlIdentifier: string  | undefined) {
        this['control_identifier'] = controlIdentifier;
    }
    public get controlIdentifier(): string | undefined {
        return this['control_identifier'];
    }
    public withName(name: string): EnabledControl {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): EnabledControl {
        this['description'] = description;
        return this;
    }
    public withControlObjective(controlObjective: string): EnabledControl {
        this['control_objective'] = controlObjective;
        return this;
    }
    public set controlObjective(controlObjective: string  | undefined) {
        this['control_objective'] = controlObjective;
    }
    public get controlObjective(): string | undefined {
        return this['control_objective'];
    }
    public withBehavior(behavior: string): EnabledControl {
        this['behavior'] = behavior;
        return this;
    }
    public withOwner(owner: string): EnabledControl {
        this['owner'] = owner;
        return this;
    }
    public withRegionalPreference(regionalPreference: string): EnabledControl {
        this['regional_preference'] = regionalPreference;
        return this;
    }
    public set regionalPreference(regionalPreference: string  | undefined) {
        this['regional_preference'] = regionalPreference;
    }
    public get regionalPreference(): string | undefined {
        return this['regional_preference'];
    }
}