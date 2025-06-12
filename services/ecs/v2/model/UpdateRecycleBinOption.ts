

export class UpdateRecycleBinOption {
    private 'switch'?: UpdateRecycleBinOptionSwitchEnum | string;
    public constructor(_switch?: string) { 
        this['switch'] = _switch;
    }
    public withSwitch(_switch: UpdateRecycleBinOptionSwitchEnum | string): UpdateRecycleBinOption {
        this['switch'] = _switch;
        return this;
    }
    public set _switch(_switch: UpdateRecycleBinOptionSwitchEnum | string  | undefined) {
        this['switch'] = _switch;
    }
    public get _switch(): UpdateRecycleBinOptionSwitchEnum | string | undefined {
        return this['switch'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateRecycleBinOptionSwitchEnum {
    ON = 'on',
    OFF = 'off'
}
