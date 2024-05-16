

export class StarRocksCreateRequestHa {
    public mode?: StarRocksCreateRequestHaModeEnum | string;
    public constructor(mode?: string) { 
        this['mode'] = mode;
    }
    public withMode(mode: StarRocksCreateRequestHaModeEnum | string): StarRocksCreateRequestHa {
        this['mode'] = mode;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StarRocksCreateRequestHaModeEnum {
    SINGLE = 'Single',
    CLUSTER = 'Cluster'
}
