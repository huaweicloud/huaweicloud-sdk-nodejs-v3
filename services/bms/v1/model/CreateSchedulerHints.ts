

export class CreateSchedulerHints {
    private 'dec_baremetal'?: CreateSchedulerHintsDecBaremetalEnum | string;
    public constructor() { 
    }
    public withDecBaremetal(decBaremetal: CreateSchedulerHintsDecBaremetalEnum | string): CreateSchedulerHints {
        this['dec_baremetal'] = decBaremetal;
        return this;
    }
    public set decBaremetal(decBaremetal: CreateSchedulerHintsDecBaremetalEnum | string  | undefined) {
        this['dec_baremetal'] = decBaremetal;
    }
    public get decBaremetal(): CreateSchedulerHintsDecBaremetalEnum | string | undefined {
        return this['dec_baremetal'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateSchedulerHintsDecBaremetalEnum {
    SHARE = 'share',
    DEDICATE = 'dedicate'
}
