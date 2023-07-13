

export class TriggerEventData {
    private 'is_serial'?: boolean | undefined;
    private 'max_fetch_bytes'?: number | undefined;
    private 'polling_interval'?: number | undefined;
    private 'polling_unit'?: TriggerEventDataPollingUnitEnum | undefined;
    public constructor() { 
    }
    public withIsSerial(isSerial: boolean): TriggerEventData {
        this['is_serial'] = isSerial;
        return this;
    }
    public set isSerial(isSerial: boolean | undefined) {
        this['is_serial'] = isSerial;
    }
    public get isSerial() {
        return this['is_serial'];
    }
    public withMaxFetchBytes(maxFetchBytes: number): TriggerEventData {
        this['max_fetch_bytes'] = maxFetchBytes;
        return this;
    }
    public set maxFetchBytes(maxFetchBytes: number | undefined) {
        this['max_fetch_bytes'] = maxFetchBytes;
    }
    public get maxFetchBytes() {
        return this['max_fetch_bytes'];
    }
    public withPollingInterval(pollingInterval: number): TriggerEventData {
        this['polling_interval'] = pollingInterval;
        return this;
    }
    public set pollingInterval(pollingInterval: number | undefined) {
        this['polling_interval'] = pollingInterval;
    }
    public get pollingInterval() {
        return this['polling_interval'];
    }
    public withPollingUnit(pollingUnit: TriggerEventDataPollingUnitEnum): TriggerEventData {
        this['polling_unit'] = pollingUnit;
        return this;
    }
    public set pollingUnit(pollingUnit: TriggerEventDataPollingUnitEnum | undefined) {
        this['polling_unit'] = pollingUnit;
    }
    public get pollingUnit() {
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
