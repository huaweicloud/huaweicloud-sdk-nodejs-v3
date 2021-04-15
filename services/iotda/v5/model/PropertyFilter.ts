import { Strategy } from './Strategy';


export class PropertyFilter {
    public path: string;
    public operator: string;
    public value: string;
    public strategy?: Strategy;
    public constructor(path?: any, operator?: any, value?: any) { 
        this['path'] = path;
        this['operator'] = operator;
        this['value'] = value;
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
    public withStrategy(strategy: Strategy): PropertyFilter {
        this['strategy'] = strategy;
        return this;
    }
}