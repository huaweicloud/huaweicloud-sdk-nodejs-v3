

export class RestarInstanceInfo {
    public type?: RestarInstanceInfoTypeEnum | string;
    public constructor() { 
    }
    public withType(type: RestarInstanceInfoTypeEnum | string): RestarInstanceInfo {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RestarInstanceInfoTypeEnum {
    SOFT = 'soft',
    HARD = 'hard'
}
