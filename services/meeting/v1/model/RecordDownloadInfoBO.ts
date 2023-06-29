import { RecordDownloadUrlDO } from './RecordDownloadUrlDO';


export class RecordDownloadInfoBO {
    public confUuid?: string;
    public urls?: Array<RecordDownloadUrlDO>;
    public constructor() { 
    }
    public withConfUuid(confUuid: string): RecordDownloadInfoBO {
        this['confUuid'] = confUuid;
        return this;
    }
    public withUrls(urls: Array<RecordDownloadUrlDO>): RecordDownloadInfoBO {
        this['urls'] = urls;
        return this;
    }
}