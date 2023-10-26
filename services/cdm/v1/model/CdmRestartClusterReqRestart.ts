

export class CdmRestartClusterReqRestart {
    public restartDelayTime?: number;
    public restartMode?: string;
    public restartLevel?: string;
    public type?: string;
    public instance?: string;
    public group?: string;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withRestartDelayTime(restartDelayTime: number): CdmRestartClusterReqRestart {
        this['restartDelayTime'] = restartDelayTime;
        return this;
    }
    public withRestartMode(restartMode: string): CdmRestartClusterReqRestart {
        this['restartMode'] = restartMode;
        return this;
    }
    public withRestartLevel(restartLevel: string): CdmRestartClusterReqRestart {
        this['restartLevel'] = restartLevel;
        return this;
    }
    public withType(type: string): CdmRestartClusterReqRestart {
        this['type'] = type;
        return this;
    }
    public withInstance(instance: string): CdmRestartClusterReqRestart {
        this['instance'] = instance;
        return this;
    }
    public withGroup(group: string): CdmRestartClusterReqRestart {
        this['group'] = group;
        return this;
    }
}