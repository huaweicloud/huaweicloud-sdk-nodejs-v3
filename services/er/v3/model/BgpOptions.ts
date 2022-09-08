

export class BgpOptions {
    private 'load_balancing_as_path_ignore'?: boolean | undefined;
    private 'load_balancing_as_path_relax'?: boolean | undefined;
    public constructor() { 
    }
    public withLoadBalancingAsPathIgnore(loadBalancingAsPathIgnore: boolean): BgpOptions {
        this['load_balancing_as_path_ignore'] = loadBalancingAsPathIgnore;
        return this;
    }
    public set loadBalancingAsPathIgnore(loadBalancingAsPathIgnore: boolean | undefined) {
        this['load_balancing_as_path_ignore'] = loadBalancingAsPathIgnore;
    }
    public get loadBalancingAsPathIgnore() {
        return this['load_balancing_as_path_ignore'];
    }
    public withLoadBalancingAsPathRelax(loadBalancingAsPathRelax: boolean): BgpOptions {
        this['load_balancing_as_path_relax'] = loadBalancingAsPathRelax;
        return this;
    }
    public set loadBalancingAsPathRelax(loadBalancingAsPathRelax: boolean | undefined) {
        this['load_balancing_as_path_relax'] = loadBalancingAsPathRelax;
    }
    public get loadBalancingAsPathRelax() {
        return this['load_balancing_as_path_relax'];
    }
}