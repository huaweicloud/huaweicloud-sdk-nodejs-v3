import { CreateSnapshotsRequestBody } from './CreateSnapshotsRequestBody';


export class CreateSnapshotsRequest {
    private 'connection_id'?: string;
    private 'X-Language'?: CreateSnapshotsRequestXLanguageEnum | string;
    public body?: CreateSnapshotsRequestBody;
    public constructor(connectionId?: string) { 
        this['connection_id'] = connectionId;
    }
    public withConnectionId(connectionId: string): CreateSnapshotsRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withXLanguage(xLanguage: CreateSnapshotsRequestXLanguageEnum | string): CreateSnapshotsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CreateSnapshotsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CreateSnapshotsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: CreateSnapshotsRequestBody): CreateSnapshotsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateSnapshotsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
