import { StatisticData } from './StatisticData';


export class StatisticTypeData {
    private 'data_type'?: StatisticTypeDataDataTypeEnum | string;
    public data?: Array<StatisticData>;
    public constructor() { 
    }
    public withDataType(dataType: StatisticTypeDataDataTypeEnum | string): StatisticTypeData {
        this['data_type'] = dataType;
        return this;
    }
    public set dataType(dataType: StatisticTypeDataDataTypeEnum | string  | undefined) {
        this['data_type'] = dataType;
    }
    public get dataType(): StatisticTypeDataDataTypeEnum | string | undefined {
        return this['data_type'];
    }
    public withData(data: Array<StatisticData>): StatisticTypeData {
        this['data'] = data;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StatisticTypeDataDataTypeEnum {
    REQUEST = 'REQUEST',
    SUCCESS = 'SUCCESS',
    FAILURE = 'FAILURE',
    SKIP = 'SKIP',
    SIZE = 'SIZE'
}
