

export class AutoscalingRef {
    public enable?: boolean;
    private 'min_l7_flavor_id'?: string;
    public constructor(enable?: boolean) { 
        this['enable'] = enable;
    }
    public withEnable(enable: boolean): AutoscalingRef {
        this['enable'] = enable;
        return this;
    }
    public withMinL7FlavorId(minL7FlavorId: string): AutoscalingRef {
        this['min_l7_flavor_id'] = minL7FlavorId;
        return this;
    }
    public set minL7FlavorId(minL7FlavorId: string  | undefined) {
        this['min_l7_flavor_id'] = minL7FlavorId;
    }
    public get minL7FlavorId(): string | undefined {
        return this['min_l7_flavor_id'];
    }
}