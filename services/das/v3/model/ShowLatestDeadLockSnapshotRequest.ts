

export class ShowLatestDeadLockSnapshotRequest {
    private 'connection_id'?: string;
    public id?: number;
    private 'X-Language'?: ShowLatestDeadLockSnapshotRequestXLanguageEnum | string;
    public constructor(connectionId?: string, id?: number) { 
        this['connection_id'] = connectionId;
        this['id'] = id;
    }
    public withConnectionId(connectionId: string): ShowLatestDeadLockSnapshotRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withId(id: number): ShowLatestDeadLockSnapshotRequest {
        this['id'] = id;
        return this;
    }
    public withXLanguage(xLanguage: ShowLatestDeadLockSnapshotRequestXLanguageEnum | string): ShowLatestDeadLockSnapshotRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowLatestDeadLockSnapshotRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowLatestDeadLockSnapshotRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowLatestDeadLockSnapshotRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
