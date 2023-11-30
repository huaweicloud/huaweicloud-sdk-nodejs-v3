

export class ExtLimitPojo {
    private 'min_ingress_size'?: number;
    private 'max_ingress_size'?: number;
    private 'ratio_95peak'?: number;
    public constructor() { 
    }
    public withMinIngressSize(minIngressSize: number): ExtLimitPojo {
        this['min_ingress_size'] = minIngressSize;
        return this;
    }
    public set minIngressSize(minIngressSize: number  | undefined) {
        this['min_ingress_size'] = minIngressSize;
    }
    public get minIngressSize(): number | undefined {
        return this['min_ingress_size'];
    }
    public withMaxIngressSize(maxIngressSize: number): ExtLimitPojo {
        this['max_ingress_size'] = maxIngressSize;
        return this;
    }
    public set maxIngressSize(maxIngressSize: number  | undefined) {
        this['max_ingress_size'] = maxIngressSize;
    }
    public get maxIngressSize(): number | undefined {
        return this['max_ingress_size'];
    }
    public withRatio95peak(ratio95peak: number): ExtLimitPojo {
        this['ratio_95peak'] = ratio95peak;
        return this;
    }
    public set ratio95peak(ratio95peak: number  | undefined) {
        this['ratio_95peak'] = ratio95peak;
    }
    public get ratio95peak(): number | undefined {
        return this['ratio_95peak'];
    }
}