import { BatchUpdatePublicRecordsetsFilter } from './BatchUpdatePublicRecordsetsFilter';
import { BatchUpdatePublicRecordsetsUpdateValue } from './BatchUpdatePublicRecordsetsUpdateValue';


export class BatchUpdatePublicRecordsetsTaskRequestBody {
    private 'zone_names'?: Array<string>;
    public filter?: BatchUpdatePublicRecordsetsFilter;
    private 'update_info'?: BatchUpdatePublicRecordsetsUpdateValue;
    public constructor(zoneNames?: Array<string>, filter?: BatchUpdatePublicRecordsetsFilter, updateInfo?: BatchUpdatePublicRecordsetsUpdateValue) { 
        this['zone_names'] = zoneNames;
        this['filter'] = filter;
        this['update_info'] = updateInfo;
    }
    public withZoneNames(zoneNames: Array<string>): BatchUpdatePublicRecordsetsTaskRequestBody {
        this['zone_names'] = zoneNames;
        return this;
    }
    public set zoneNames(zoneNames: Array<string>  | undefined) {
        this['zone_names'] = zoneNames;
    }
    public get zoneNames(): Array<string> | undefined {
        return this['zone_names'];
    }
    public withFilter(filter: BatchUpdatePublicRecordsetsFilter): BatchUpdatePublicRecordsetsTaskRequestBody {
        this['filter'] = filter;
        return this;
    }
    public withUpdateInfo(updateInfo: BatchUpdatePublicRecordsetsUpdateValue): BatchUpdatePublicRecordsetsTaskRequestBody {
        this['update_info'] = updateInfo;
        return this;
    }
    public set updateInfo(updateInfo: BatchUpdatePublicRecordsetsUpdateValue  | undefined) {
        this['update_info'] = updateInfo;
    }
    public get updateInfo(): BatchUpdatePublicRecordsetsUpdateValue | undefined {
        return this['update_info'];
    }
}