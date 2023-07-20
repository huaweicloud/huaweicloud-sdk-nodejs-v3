

export class BuildStep {
    public name?: string;
    public status?: string;
    private 'build_time'?: number;
    public constructor() { 
    }
    public withName(name: string): BuildStep {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): BuildStep {
        this['status'] = status;
        return this;
    }
    public withBuildTime(buildTime: number): BuildStep {
        this['build_time'] = buildTime;
        return this;
    }
    public set buildTime(buildTime: number  | undefined) {
        this['build_time'] = buildTime;
    }
    public get buildTime(): number | undefined {
        return this['build_time'];
    }
}