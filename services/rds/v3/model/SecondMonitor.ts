

export class SecondMonitor {
    private 'switch_option'?: boolean;
    public interval?: SecondMonitorIntervalEnum | number;
    public constructor(switchOption?: boolean) { 
        this['switch_option'] = switchOption;
    }
    public withSwitchOption(switchOption: boolean): SecondMonitor {
        this['switch_option'] = switchOption;
        return this;
    }
    public set switchOption(switchOption: boolean  | undefined) {
        this['switch_option'] = switchOption;
    }
    public get switchOption(): boolean | undefined {
        return this['switch_option'];
    }
    public withInterval(interval: SecondMonitorIntervalEnum | number): SecondMonitor {
        this['interval'] = interval;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SecondMonitorIntervalEnum {
    NUMBER_1 = 1,
    NUMBER_5 = 5
}
