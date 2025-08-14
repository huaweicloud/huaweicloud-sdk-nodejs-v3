import { RailTransparentConfig } from './RailTransparentConfig';


export class CustomOptions {
    private 'custom_configuration1_rule'?: string;
    private 'rail_transparent_config'?: RailTransparentConfig;
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
    public withRailTransparentConfig(railTransparentConfig: RailTransparentConfig): CustomOptions {
        this['rail_transparent_config'] = railTransparentConfig;
        return this;
    }
    public set railTransparentConfig(railTransparentConfig: RailTransparentConfig  | undefined) {
        this['rail_transparent_config'] = railTransparentConfig;
    }
    public get railTransparentConfig(): RailTransparentConfig | undefined {
        return this['rail_transparent_config'];
    }
}