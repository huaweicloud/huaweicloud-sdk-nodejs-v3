

export class ExpandParam {
    private 'node_group_name'?: string;
    public count?: number;
    private 'skip_bootstrap_scripts'?: boolean;
    private 'scale_without_start'?: boolean;
    public constructor(nodeGroupName?: string, count?: number) { 
        this['node_group_name'] = nodeGroupName;
        this['count'] = count;
    }
    public withNodeGroupName(nodeGroupName: string): ExpandParam {
        this['node_group_name'] = nodeGroupName;
        return this;
    }
    public set nodeGroupName(nodeGroupName: string  | undefined) {
        this['node_group_name'] = nodeGroupName;
    }
    public get nodeGroupName(): string | undefined {
        return this['node_group_name'];
    }
    public withCount(count: number): ExpandParam {
        this['count'] = count;
        return this;
    }
    public withSkipBootstrapScripts(skipBootstrapScripts: boolean): ExpandParam {
        this['skip_bootstrap_scripts'] = skipBootstrapScripts;
        return this;
    }
    public set skipBootstrapScripts(skipBootstrapScripts: boolean  | undefined) {
        this['skip_bootstrap_scripts'] = skipBootstrapScripts;
    }
    public get skipBootstrapScripts(): boolean | undefined {
        return this['skip_bootstrap_scripts'];
    }
    public withScaleWithoutStart(scaleWithoutStart: boolean): ExpandParam {
        this['scale_without_start'] = scaleWithoutStart;
        return this;
    }
    public set scaleWithoutStart(scaleWithoutStart: boolean  | undefined) {
        this['scale_without_start'] = scaleWithoutStart;
    }
    public get scaleWithoutStart(): boolean | undefined {
        return this['scale_without_start'];
    }
}