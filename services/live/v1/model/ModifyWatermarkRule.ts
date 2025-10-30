import { WatermarkLocation } from './WatermarkLocation';


export class ModifyWatermarkRule {
    private 'rule_name'?: string;
    public location?: WatermarkLocation;
    public constructor(location?: WatermarkLocation) { 
        this['location'] = location;
    }
    public withRuleName(ruleName: string): ModifyWatermarkRule {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withLocation(location: WatermarkLocation): ModifyWatermarkRule {
        this['location'] = location;
        return this;
    }
}