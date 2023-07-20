

export class NoSQLDrRpoAndRto {
    public scene?: NoSQLDrRpoAndRtoSceneEnum | string;
    public rpo?: number;
    public rto?: number;
    public constructor(scene?: string) { 
        this['scene'] = scene;
    }
    public withScene(scene: NoSQLDrRpoAndRtoSceneEnum | string): NoSQLDrRpoAndRto {
        this['scene'] = scene;
        return this;
    }
    public withRpo(rpo: number): NoSQLDrRpoAndRto {
        this['rpo'] = rpo;
        return this;
    }
    public withRto(rto: number): NoSQLDrRpoAndRto {
        this['rto'] = rto;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NoSQLDrRpoAndRtoSceneEnum {
    FAILOVER = 'FAILOVER',
    SWITCHOVER = 'SWITCHOVER'
}
