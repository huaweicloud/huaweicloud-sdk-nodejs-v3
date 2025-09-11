

export class HierarchicalValueResp {
    public critical?: number;
    public major?: number;
    public minor?: number;
    public info?: number;
    public constructor() { 
    }
    public withCritical(critical: number): HierarchicalValueResp {
        this['critical'] = critical;
        return this;
    }
    public withMajor(major: number): HierarchicalValueResp {
        this['major'] = major;
        return this;
    }
    public withMinor(minor: number): HierarchicalValueResp {
        this['minor'] = minor;
        return this;
    }
    public withInfo(info: number): HierarchicalValueResp {
        this['info'] = info;
        return this;
    }
}