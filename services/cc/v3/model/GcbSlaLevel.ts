

export class GcbSlaLevel {
    private 'sla_level'?: GcbSlaLevelSlaLevelEnum | string;
    public constructor() { 
    }
    public withSlaLevel(slaLevel: GcbSlaLevelSlaLevelEnum | string): GcbSlaLevel {
        this['sla_level'] = slaLevel;
        return this;
    }
    public set slaLevel(slaLevel: GcbSlaLevelSlaLevelEnum | string  | undefined) {
        this['sla_level'] = slaLevel;
    }
    public get slaLevel(): GcbSlaLevelSlaLevelEnum | string | undefined {
        return this['sla_level'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GcbSlaLevelSlaLevelEnum {
    PT = 'Pt',
    AU = 'Au',
    AG = 'Ag'
}
