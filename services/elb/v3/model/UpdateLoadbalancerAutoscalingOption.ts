

export class UpdateLoadbalancerAutoscalingOption {
    public enable: boolean;
    private 'min_l7_flavor_id'?: string | undefined;
    public constructor(enable?: any) { 
        this['enable'] = enable;
    }
    public withEnable(enable: boolean): UpdateLoadbalancerAutoscalingOption {
        this['enable'] = enable;
        return this;
    }
    public withMinL7FlavorId(minL7FlavorId: string): UpdateLoadbalancerAutoscalingOption {
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