

export class ListDownloadAddressRequestBody {
    private 'record_ids'?: Array<string>;
    public constructor() { 
    }
    public withRecordIds(recordIds: Array<string>): ListDownloadAddressRequestBody {
        this['record_ids'] = recordIds;
        return this;
    }
    public set recordIds(recordIds: Array<string>  | undefined) {
        this['record_ids'] = recordIds;
    }
    public get recordIds(): Array<string> | undefined {
        return this['record_ids'];
    }
}