

export class NodePoolNodeAutoscaling {
    public enable?: boolean;
    public minNodeCount?: number;
    public maxNodeCount?: number;
    public scaleDownCooldownTime?: number;
    public priority?: number;
    public scaleDownUnneededTime?: number;
    public scaleDownUtilizationThreshold?: number;
    public constructor() { 
    }
    public withEnable(enable: boolean): NodePoolNodeAutoscaling {
        this['enable'] = enable;
        return this;
    }
    public withMinNodeCount(minNodeCount: number): NodePoolNodeAutoscaling {
        this['minNodeCount'] = minNodeCount;
        return this;
    }
    public withMaxNodeCount(maxNodeCount: number): NodePoolNodeAutoscaling {
        this['maxNodeCount'] = maxNodeCount;
        return this;
    }
    public withScaleDownCooldownTime(scaleDownCooldownTime: number): NodePoolNodeAutoscaling {
        this['scaleDownCooldownTime'] = scaleDownCooldownTime;
        return this;
    }
    public withPriority(priority: number): NodePoolNodeAutoscaling {
        this['priority'] = priority;
        return this;
    }
    public withScaleDownUnneededTime(scaleDownUnneededTime: number): NodePoolNodeAutoscaling {
        this['scaleDownUnneededTime'] = scaleDownUnneededTime;
        return this;
    }
    public withScaleDownUtilizationThreshold(scaleDownUtilizationThreshold: number): NodePoolNodeAutoscaling {
        this['scaleDownUtilizationThreshold'] = scaleDownUtilizationThreshold;
        return this;
    }
}