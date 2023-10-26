

export class CdmStopClusterReqStop {
    public stopMode?: CdmStopClusterReqStopStopModeEnum | string;
    public delayTime?: number;
    public constructor(stopMode?: string) { 
        this['stopMode'] = stopMode;
    }
    public withStopMode(stopMode: CdmStopClusterReqStopStopModeEnum | string): CdmStopClusterReqStop {
        this['stopMode'] = stopMode;
        return this;
    }
    public withDelayTime(delayTime: number): CdmStopClusterReqStop {
        this['delayTime'] = delayTime;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CdmStopClusterReqStopStopModeEnum {
    IMMEDIATELY = 'IMMEDIATELY',
    GRACEFULLY = 'GRACEFULLY'
}
