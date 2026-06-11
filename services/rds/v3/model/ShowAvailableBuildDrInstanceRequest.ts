

export class ShowAvailableBuildDrInstanceRequest {
    public type?: ShowAvailableBuildDrInstanceRequestTypeEnum | string;
    private 'X-Language'?: string;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withType(type: ShowAvailableBuildDrInstanceRequestTypeEnum | string): ShowAvailableBuildDrInstanceRequest {
        this['type'] = type;
        return this;
    }
    public withXLanguage(xLanguage: string): ShowAvailableBuildDrInstanceRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowAvailableBuildDrInstanceRequestTypeEnum {
    MASTER = 'master',
    SLAVE = 'slave'
}
