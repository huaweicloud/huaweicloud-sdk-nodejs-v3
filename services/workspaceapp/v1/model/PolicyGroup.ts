import { Policies } from './Policies';
import { Target } from './Target';


export class PolicyGroup {
    public id?: string;
    public name?: string;
    public priority?: number;
    public description?: string;
    public targets?: Array<Target>;
    public policies?: Policies;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    public constructor() { 
    }
    public withId(id: string): PolicyGroup {
        this['id'] = id;
        return this;
    }
    public withName(name: string): PolicyGroup {
        this['name'] = name;
        return this;
    }
    public withPriority(priority: number): PolicyGroup {
        this['priority'] = priority;
        return this;
    }
    public withDescription(description: string): PolicyGroup {
        this['description'] = description;
        return this;
    }
    public withTargets(targets: Array<Target>): PolicyGroup {
        this['targets'] = targets;
        return this;
    }
    public withPolicies(policies: Policies): PolicyGroup {
        this['policies'] = policies;
        return this;
    }
    public withCreateTime(createTime: Date): PolicyGroup {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): PolicyGroup {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
}