import { DataWareHouseDTODwConfig } from './DataWareHouseDTODwConfig';


export class DataWareHouseDTO {
    private 'dw_id'?: string;
    private 'dw_name'?: string;
    private 'dw_type'?: DataWareHouseDTODwTypeEnum | string;
    private 'dw_config'?: DataWareHouseDTODwConfig;
    public constructor() { 
    }
    public withDwId(dwId: string): DataWareHouseDTO {
        this['dw_id'] = dwId;
        return this;
    }
    public set dwId(dwId: string  | undefined) {
        this['dw_id'] = dwId;
    }
    public get dwId(): string | undefined {
        return this['dw_id'];
    }
    public withDwName(dwName: string): DataWareHouseDTO {
        this['dw_name'] = dwName;
        return this;
    }
    public set dwName(dwName: string  | undefined) {
        this['dw_name'] = dwName;
    }
    public get dwName(): string | undefined {
        return this['dw_name'];
    }
    public withDwType(dwType: DataWareHouseDTODwTypeEnum | string): DataWareHouseDTO {
        this['dw_type'] = dwType;
        return this;
    }
    public set dwType(dwType: DataWareHouseDTODwTypeEnum | string  | undefined) {
        this['dw_type'] = dwType;
    }
    public get dwType(): DataWareHouseDTODwTypeEnum | string | undefined {
        return this['dw_type'];
    }
    public withDwConfig(dwConfig: DataWareHouseDTODwConfig): DataWareHouseDTO {
        this['dw_config'] = dwConfig;
        return this;
    }
    public set dwConfig(dwConfig: DataWareHouseDTODwConfig  | undefined) {
        this['dw_config'] = dwConfig;
    }
    public get dwConfig(): DataWareHouseDTODwConfig | undefined {
        return this['dw_config'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DataWareHouseDTODwTypeEnum {
    HIVE = 'HIVE',
    DWS = 'DWS',
    SPARK = 'SPARK'
}
