

export class EnvVar {
    public label?: string;
    public des?: string;
    private 'env_name'?: string;
    private 'env_type'?: string;
    public value?: string;
    public modifiable?: boolean;
    public displayable?: boolean;
    private 'used_steps'?: Array<string>;
    public constructor() { 
    }
    public withLabel(label: string): EnvVar {
        this['label'] = label;
        return this;
    }
    public withDes(des: string): EnvVar {
        this['des'] = des;
        return this;
    }
    public withEnvName(envName: string): EnvVar {
        this['env_name'] = envName;
        return this;
    }
    public set envName(envName: string  | undefined) {
        this['env_name'] = envName;
    }
    public get envName(): string | undefined {
        return this['env_name'];
    }
    public withEnvType(envType: string): EnvVar {
        this['env_type'] = envType;
        return this;
    }
    public set envType(envType: string  | undefined) {
        this['env_type'] = envType;
    }
    public get envType(): string | undefined {
        return this['env_type'];
    }
    public withValue(value: string): EnvVar {
        this['value'] = value;
        return this;
    }
    public withModifiable(modifiable: boolean): EnvVar {
        this['modifiable'] = modifiable;
        return this;
    }
    public withDisplayable(displayable: boolean): EnvVar {
        this['displayable'] = displayable;
        return this;
    }
    public withUsedSteps(usedSteps: Array<string>): EnvVar {
        this['used_steps'] = usedSteps;
        return this;
    }
    public set usedSteps(usedSteps: Array<string>  | undefined) {
        this['used_steps'] = usedSteps;
    }
    public get usedSteps(): Array<string> | undefined {
        return this['used_steps'];
    }
}