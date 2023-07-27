

export class SchedulerHints {
    private 'dec_baremetal'?: Array<SchedulerHintsDecBaremetalEnum> | Array<string>;
    public constructor() { 
    }
    public withDecBaremetal(decBaremetal: Array<SchedulerHintsDecBaremetalEnum> | Array<string>): SchedulerHints {
        this['dec_baremetal'] = decBaremetal;
        return this;
    }
    public set decBaremetal(decBaremetal: Array<SchedulerHintsDecBaremetalEnum> | Array<string>  | undefined) {
        this['dec_baremetal'] = decBaremetal;
    }
    public get decBaremetal(): Array<SchedulerHintsDecBaremetalEnum> | Array<string> | undefined {
        return this['dec_baremetal'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SchedulerHintsDecBaremetalEnum {
    SHARE = 'share',
    DEDICATE = 'dedicate'
}
