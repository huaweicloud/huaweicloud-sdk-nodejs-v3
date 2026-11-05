

export class NodeEvent {
    public eventId?: string;
    public isFaultNode?: boolean;
    public nodeName?: string;
    public instanceId?: string;
    public instanceType?: string;
    public underLyingInstanceId?: string;
    public flavorSupportRedeploy?: boolean;
    public poolName?: string;
    public poolDisplayName?: string;
    public state?: string;
    public publishTime?: string;
    public startTime?: string;
    public finishTime?: string;
    public jobProgress?: string;
    public constructor() { 
    }
    public withEventId(eventId: string): NodeEvent {
        this['eventId'] = eventId;
        return this;
    }
    public withIsFaultNode(isFaultNode: boolean): NodeEvent {
        this['isFaultNode'] = isFaultNode;
        return this;
    }
    public withNodeName(nodeName: string): NodeEvent {
        this['nodeName'] = nodeName;
        return this;
    }
    public withInstanceId(instanceId: string): NodeEvent {
        this['instanceId'] = instanceId;
        return this;
    }
    public withInstanceType(instanceType: string): NodeEvent {
        this['instanceType'] = instanceType;
        return this;
    }
    public withUnderLyingInstanceId(underLyingInstanceId: string): NodeEvent {
        this['underLyingInstanceId'] = underLyingInstanceId;
        return this;
    }
    public withFlavorSupportRedeploy(flavorSupportRedeploy: boolean): NodeEvent {
        this['flavorSupportRedeploy'] = flavorSupportRedeploy;
        return this;
    }
    public withPoolName(poolName: string): NodeEvent {
        this['poolName'] = poolName;
        return this;
    }
    public withPoolDisplayName(poolDisplayName: string): NodeEvent {
        this['poolDisplayName'] = poolDisplayName;
        return this;
    }
    public withState(state: string): NodeEvent {
        this['state'] = state;
        return this;
    }
    public withPublishTime(publishTime: string): NodeEvent {
        this['publishTime'] = publishTime;
        return this;
    }
    public withStartTime(startTime: string): NodeEvent {
        this['startTime'] = startTime;
        return this;
    }
    public withFinishTime(finishTime: string): NodeEvent {
        this['finishTime'] = finishTime;
        return this;
    }
    public withJobProgress(jobProgress: string): NodeEvent {
        this['jobProgress'] = jobProgress;
        return this;
    }
}