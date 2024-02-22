import { VersionStrategyRules } from './VersionStrategyRules';


export class VersionStrategy {
    public rules?: Array<VersionStrategyRules>;
    private 'combine_type'?: VersionStrategyCombineTypeEnum | string;
    public constructor() { 
    }
    public withRules(rules: Array<VersionStrategyRules>): VersionStrategy {
        this['rules'] = rules;
        return this;
    }
    public withCombineType(combineType: VersionStrategyCombineTypeEnum | string): VersionStrategy {
        this['combine_type'] = combineType;
        return this;
    }
    public set combineType(combineType: VersionStrategyCombineTypeEnum | string  | undefined) {
        this['combine_type'] = combineType;
    }
    public get combineType(): VersionStrategyCombineTypeEnum | string | undefined {
        return this['combine_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VersionStrategyCombineTypeEnum {
    AND = 'and',
    OR = 'or'
}
