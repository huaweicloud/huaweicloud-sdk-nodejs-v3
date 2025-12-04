

export class ReqUpdateDehMessage {
    private 'auto_placement'?: ReqUpdateDehMessageAutoPlacementEnum | string;
    public name?: string;
    public constructor() { 
    }
    public withAutoPlacement(autoPlacement: ReqUpdateDehMessageAutoPlacementEnum | string): ReqUpdateDehMessage {
        this['auto_placement'] = autoPlacement;
        return this;
    }
    public set autoPlacement(autoPlacement: ReqUpdateDehMessageAutoPlacementEnum | string  | undefined) {
        this['auto_placement'] = autoPlacement;
    }
    public get autoPlacement(): ReqUpdateDehMessageAutoPlacementEnum | string | undefined {
        return this['auto_placement'];
    }
    public withName(name: string): ReqUpdateDehMessage {
        this['name'] = name;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ReqUpdateDehMessageAutoPlacementEnum {
    ON = 'on',
    OFF = 'off'
}
