import { EventTimeInfo } from './EventTimeInfo';


export class DataIoTime {
    private 'all_time'?: number;
    private 'data_io_time_details'?: EventTimeInfo;
    public constructor(allTime?: number, dataIoTimeDetails?: EventTimeInfo) { 
        this['all_time'] = allTime;
        this['data_io_time_details'] = dataIoTimeDetails;
    }
    public withAllTime(allTime: number): DataIoTime {
        this['all_time'] = allTime;
        return this;
    }
    public set allTime(allTime: number  | undefined) {
        this['all_time'] = allTime;
    }
    public get allTime(): number | undefined {
        return this['all_time'];
    }
    public withDataIoTimeDetails(dataIoTimeDetails: EventTimeInfo): DataIoTime {
        this['data_io_time_details'] = dataIoTimeDetails;
        return this;
    }
    public set dataIoTimeDetails(dataIoTimeDetails: EventTimeInfo  | undefined) {
        this['data_io_time_details'] = dataIoTimeDetails;
    }
    public get dataIoTimeDetails(): EventTimeInfo | undefined {
        return this['data_io_time_details'];
    }
}