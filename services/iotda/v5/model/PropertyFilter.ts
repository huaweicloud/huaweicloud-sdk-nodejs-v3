import { Strategy } from './Strategy';


export class PropertyFilter {
    public path?: string;
    public operator?: string;
    public value?: string;
    private 'in_values'?: Array<string>;
    public strategy?: Strategy;
    public constructor(path?: string, operator?: string) { 
        this['path'] = path;
        this['operator'] = operator;
    }
    public withPath(path: string): PropertyFilter {
        this['path'] = path;
        return this;
    }
    public withOperator(operator: string): PropertyFilter {
        this['operator'] = operator;
        return this;
    }
    public withValue(value: string): PropertyFilter {
        this['value'] = value;
        return this;
    }
    public withInValues(inValues: Array<string>): PropertyFilter {
        this['in_values'] = inValues;
        return this;
    }
    public set inValues(inValues: Array<string>  | undefined) {
        this['in_values'] = inValues;
    }
    public get inValues(): Array<string> | undefined {
        return this['in_values'];
    }
    public withStrategy(strategy: Strategy): PropertyFilter {
        this['strategy'] = strategy;
        return this;
    }
}