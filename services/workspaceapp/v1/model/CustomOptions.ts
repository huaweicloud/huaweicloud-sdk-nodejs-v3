

export class CustomOptions {
    private 'custom_configuration1_rule'?: string;
    public constructor() { 
    }
    public withCustomConfiguration1Rule(customConfiguration1Rule: string): CustomOptions {
        this['custom_configuration1_rule'] = customConfiguration1Rule;
        return this;
    }
    public set customConfiguration1Rule(customConfiguration1Rule: string  | undefined) {
        this['custom_configuration1_rule'] = customConfiguration1Rule;
    }
    public get customConfiguration1Rule(): string | undefined {
        return this['custom_configuration1_rule'];
    }
}