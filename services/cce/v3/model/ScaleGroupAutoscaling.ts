

export class ScaleGroupAutoscaling {
    public enable?: boolean;
    public extensionPriority?: number;
    public minNodeCount?: number;
    public maxNodeCount?: number;
    public constructor() { 
    }
    public withEnable(enable: boolean): ScaleGroupAutoscaling {
        this['enable'] = enable;
        return this;
    }
    public withExtensionPriority(extensionPriority: number): ScaleGroupAutoscaling {
        this['extensionPriority'] = extensionPriority;
        return this;
    }
    public withMinNodeCount(minNodeCount: number): ScaleGroupAutoscaling {
        this['minNodeCount'] = minNodeCount;
        return this;
    }
    public withMaxNodeCount(maxNodeCount: number): ScaleGroupAutoscaling {
        this['maxNodeCount'] = maxNodeCount;
        return this;
    }
}