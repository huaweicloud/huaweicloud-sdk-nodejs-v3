

export class HierarchicalValue {
    public critical?: number;
    public major?: number;
    public minor?: number;
    public info?: number;
    public constructor() { 
    }
    public withCritical(critical: number): HierarchicalValue {
        this['critical'] = critical;
        return this;
    }
    public withMajor(major: number): HierarchicalValue {
        this['major'] = major;
        return this;
    }
    public withMinor(minor: number): HierarchicalValue {
        this['minor'] = minor;
        return this;
    }
    public withInfo(info: number): HierarchicalValue {
        this['info'] = info;
        return this;
    }
}