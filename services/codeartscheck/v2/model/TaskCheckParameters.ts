import { CheckConfigInfo } from './CheckConfigInfo';


export class TaskCheckParameters {
    private 'check_id'?: number;
    public name?: string;
    private 'checker_configs'?: Array<CheckConfigInfo>;
    public constructor() { 
    }
    public withCheckId(checkId: number): TaskCheckParameters {
        this['check_id'] = checkId;
        return this;
    }
    public set checkId(checkId: number  | undefined) {
        this['check_id'] = checkId;
    }
    public get checkId(): number | undefined {
        return this['check_id'];
    }
    public withName(name: string): TaskCheckParameters {
        this['name'] = name;
        return this;
    }
    public withCheckerConfigs(checkerConfigs: Array<CheckConfigInfo>): TaskCheckParameters {
        this['checker_configs'] = checkerConfigs;
        return this;
    }
    public set checkerConfigs(checkerConfigs: Array<CheckConfigInfo>  | undefined) {
        this['checker_configs'] = checkerConfigs;
    }
    public get checkerConfigs(): Array<CheckConfigInfo> | undefined {
        return this['checker_configs'];
    }
}