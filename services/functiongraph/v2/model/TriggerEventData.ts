

export class TriggerEventData {
    private 'is_serial'?: boolean;
    private 'max_fetch_bytes'?: number;
    private 'polling_interval'?: number;
    private 'polling_unit'?: TriggerEventDataPollingUnitEnum | string;
    public constructor() { 
    }
    public withIsSerial(isSerial: boolean): TriggerEventData {
        this['is_serial'] = isSerial;
        return this;
    }
    public set isSerial(isSerial: boolean  | undefined) {
        this['is_serial'] = isSerial;
    }
    public get isSerial(): boolean | undefined {
        return this['is_serial'];
    }
    public withMaxFetchBytes(maxFetchBytes: number): TriggerEventData {
        this['max_fetch_bytes'] = maxFetchBytes;
        return this;
    }
    public set maxFetchBytes(maxFetchBytes: number  | undefined) {
        this['max_fetch_bytes'] = maxFetchBytes;
    }
    public get maxFetchBytes(): number | undefined {
        return this['max_fetch_bytes'];
    }
    public withPollingInterval(pollingInterval: number): TriggerEventData {
        this['polling_interval'] = pollingInterval;
        return this;
    }
    public set pollingInterval(pollingInterval: number  | undefined) {
        this['polling_interval'] = pollingInterval;
    }
    public get pollingInterval(): number | undefined {
        return this['polling_interval'];
    }
    public withPollingUnit(pollingUnit: TriggerEventDataPollingUnitEnum | string): TriggerEventData {
        this['polling_unit'] = pollingUnit;
        return this;
    }
    public set pollingUnit(pollingUnit: TriggerEventDataPollingUnitEnum | string  | undefined) {
        this['polling_unit'] = pollingUnit;
    }
    public get pollingUnit(): TriggerEventDataPollingUnitEnum | string | undefined {
        return this['polling_unit'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TriggerEventDataPollingUnitEnum {
    MS = 'ms',
    S = 's'
}
