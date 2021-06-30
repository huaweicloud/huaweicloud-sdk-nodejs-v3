

export class NodePoolNodeAutoscaling {
    public enable?: boolean;
    public minNodeCount?: number;
    public maxNodeCount?: number;
    public scaleDownCooldownTime?: number;
    public priority?: number;
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
}