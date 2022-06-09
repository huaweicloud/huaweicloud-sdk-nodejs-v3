

export class CreateLoadbalancerAutoscalingOption {
    public enable: boolean;
    private 'min_l4_flavor_id'?: string | undefined;
    private 'min_l7_flavor_id'?: string | undefined;
    public constructor(enable?: any) { 
        this['enable'] = enable;
    }
    public withEnable(enable: boolean): CreateLoadbalancerAutoscalingOption {
        this['enable'] = enable;
        return this;
    }
    public withMinL4FlavorId(minL4FlavorId: string): CreateLoadbalancerAutoscalingOption {
        this['min_l4_flavor_id'] = minL4FlavorId;
        return this;
    }
    public set minL4FlavorId(minL4FlavorId: string | undefined) {
        this['min_l4_flavor_id'] = minL4FlavorId;
    }
    public get minL4FlavorId() {
        return this['min_l4_flavor_id'];
    }
    public withMinL7FlavorId(minL7FlavorId: string): CreateLoadbalancerAutoscalingOption {
        this['min_l7_flavor_id'] = minL7FlavorId;
        return this;
    }
    public set minL7FlavorId(minL7FlavorId: string | undefined) {
        this['min_l7_flavor_id'] = minL7FlavorId;
    }
    public get minL7FlavorId() {
        return this['min_l7_flavor_id'];
    }
}