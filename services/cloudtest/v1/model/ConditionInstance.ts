import { DepParamInstance } from './DepParamInstance';


export class ConditionInstance {
    public conditionIndex?: number;
    public conditionMap?: { [key: string]: Array<string>; };
    public depParamMap?: { [key: string]: DepParamInstance; };
    public statementIndex?: number;
    public constructor() { 
    }
    public withConditionIndex(conditionIndex: number): ConditionInstance {
        this['conditionIndex'] = conditionIndex;
        return this;
    }
    public withConditionMap(conditionMap: { [key: string]: Array<string>; }): ConditionInstance {
        this['conditionMap'] = conditionMap;
        return this;
    }
    public withDepParamMap(depParamMap: { [key: string]: DepParamInstance; }): ConditionInstance {
        this['depParamMap'] = depParamMap;
        return this;
    }
    public withStatementIndex(statementIndex: number): ConditionInstance {
        this['statementIndex'] = statementIndex;
        return this;
    }
}