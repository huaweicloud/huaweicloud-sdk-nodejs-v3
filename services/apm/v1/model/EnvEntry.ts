

export class EnvEntry {
    private 'env_id'?: number;
    private 'env_name'?: string;
    public constructor() { 
    }
    public withEnvId(envId: number): EnvEntry {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: number  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): number | undefined {
        return this['env_id'];
    }
    public withEnvName(envName: string): EnvEntry {
        this['env_name'] = envName;
        return this;
    }
    public set envName(envName: string  | undefined) {
        this['env_name'] = envName;
    }
    public get envName(): string | undefined {
        return this['env_name'];
    }
}