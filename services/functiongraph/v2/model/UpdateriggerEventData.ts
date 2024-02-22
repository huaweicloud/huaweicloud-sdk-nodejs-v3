

export class UpdateriggerEventData {
    private 'is_serial'?: boolean;
    private 'max_fetch_bytes'?: number;
    private 'polling_interval'?: number;
    private 'polling_unit'?: UpdateriggerEventDataPollingUnitEnum | string;
    public constructor() { 
    }
    public withIsSerial(isSerial: boolean): UpdateriggerEventData {
        this['is_serial'] = isSerial;
        return this;
    }
    public set isSerial(isSerial: boolean  | undefined) {
        this['is_serial'] = isSerial;
    }
    public get isSerial(): boolean | undefined {
        return this['is_serial'];
    }
    public withMaxFetchBytes(maxFetchBytes: number): UpdateriggerEventData {
        this['max_fetch_bytes'] = maxFetchBytes;
        return this;
    }
    public set maxFetchBytes(maxFetchBytes: number  | undefined) {
        this['max_fetch_bytes'] = maxFetchBytes;
    }
    public get maxFetchBytes(): number | undefined {
        return this['max_fetch_bytes'];
    }
    public withPollingInterval(pollingInterval: number): UpdateriggerEventData {
        this['polling_interval'] = pollingInterval;
        return this;
    }
    public set pollingInterval(pollingInterval: number  | undefined) {
        this['polling_interval'] = pollingInterval;
    }
    public get pollingInterval(): number | undefined {
        return this['polling_interval'];
    }
    public withPollingUnit(pollingUnit: UpdateriggerEventDataPollingUnitEnum | string): UpdateriggerEventData {
        this['polling_unit'] = pollingUnit;
        return this;
    }
    public set pollingUnit(pollingUnit: UpdateriggerEventDataPollingUnitEnum | string  | undefined) {
        this['polling_unit'] = pollingUnit;
    }
    public get pollingUnit(): UpdateriggerEventDataPollingUnitEnum | string | undefined {
        return this['polling_unit'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateriggerEventDataPollingUnitEnum {
    MS = 'ms',
    S = 's'
}
