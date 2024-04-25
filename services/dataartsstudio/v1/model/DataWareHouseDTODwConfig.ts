

export class DataWareHouseDTODwConfig {
    private 'fgac_flag'?: boolean;
    private 'fgac_type'?: string;
    private 'fgac_conn_status'?: DataWareHouseDTODwConfigFgacConnStatusEnum | string;
    private 'fgac_conn_test_time'?: number;
    private 'fgac_conn_test_error'?: string;
    public constructor() { 
    }
    public withFgacFlag(fgacFlag: boolean): DataWareHouseDTODwConfig {
        this['fgac_flag'] = fgacFlag;
        return this;
    }
    public set fgacFlag(fgacFlag: boolean  | undefined) {
        this['fgac_flag'] = fgacFlag;
    }
    public get fgacFlag(): boolean | undefined {
        return this['fgac_flag'];
    }
    public withFgacType(fgacType: string): DataWareHouseDTODwConfig {
        this['fgac_type'] = fgacType;
        return this;
    }
    public set fgacType(fgacType: string  | undefined) {
        this['fgac_type'] = fgacType;
    }
    public get fgacType(): string | undefined {
        return this['fgac_type'];
    }
    public withFgacConnStatus(fgacConnStatus: DataWareHouseDTODwConfigFgacConnStatusEnum | string): DataWareHouseDTODwConfig {
        this['fgac_conn_status'] = fgacConnStatus;
        return this;
    }
    public set fgacConnStatus(fgacConnStatus: DataWareHouseDTODwConfigFgacConnStatusEnum | string  | undefined) {
        this['fgac_conn_status'] = fgacConnStatus;
    }
    public get fgacConnStatus(): DataWareHouseDTODwConfigFgacConnStatusEnum | string | undefined {
        return this['fgac_conn_status'];
    }
    public withFgacConnTestTime(fgacConnTestTime: number): DataWareHouseDTODwConfig {
        this['fgac_conn_test_time'] = fgacConnTestTime;
        return this;
    }
    public set fgacConnTestTime(fgacConnTestTime: number  | undefined) {
        this['fgac_conn_test_time'] = fgacConnTestTime;
    }
    public get fgacConnTestTime(): number | undefined {
        return this['fgac_conn_test_time'];
    }
    public withFgacConnTestError(fgacConnTestError: string): DataWareHouseDTODwConfig {
        this['fgac_conn_test_error'] = fgacConnTestError;
        return this;
    }
    public set fgacConnTestError(fgacConnTestError: string  | undefined) {
        this['fgac_conn_test_error'] = fgacConnTestError;
    }
    public get fgacConnTestError(): string | undefined {
        return this['fgac_conn_test_error'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DataWareHouseDTODwConfigFgacConnStatusEnum {
    UNKNOWN = 'UNKNOWN',
    TESTING = 'TESTING',
    SUCCESS = 'SUCCESS',
    FAILED = 'FAILED'
}
