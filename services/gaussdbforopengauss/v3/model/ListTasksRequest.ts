

export class ListTasksRequest {
    private 'X-Language'?: string;
    public status?: ListTasksRequestStatusEnum | string;
    public name?: ListTasksRequestNameEnum | string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): ListTasksRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withStatus(status: ListTasksRequestStatusEnum | string): ListTasksRequest {
        this['status'] = status;
        return this;
    }
    public withName(name: ListTasksRequestNameEnum | string): ListTasksRequest {
        this['name'] = name;
        return this;
    }
    public withStartTime(startTime: string): ListTasksRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListTasksRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withOffset(offset: number): ListTasksRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListTasksRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListTasksRequestStatusEnum {
    RUNNING = 'Running',
    COMPLETED = 'Completed',
    FAILED = 'Failed'
}
/**
    * @export
    * @enum {string}
    */
export enum ListTasksRequestNameEnum {
    CREATEGAUSSDBV5INSTANCE = 'CreateGaussDBV5Instance',
    BACKUPSNAPSHOTGAUSSDBV5ININSTANCE = 'BackupSnapshotGaussDBV5InInstance',
    CLONEGAUSSDBV5NEWINSTANCE = 'CloneGaussDBV5NewInstance',
    RESTOREGAUSSDBV5ININSTANCE = 'RestoreGaussDBV5InInstance',
    RESTOREGAUSSDBV5ININSTANCETOEXISTEDINST = 'RestoreGaussDBV5InInstanceToExistedInst',
    DELETEGAUSSDBV5INSTANCE = 'DeleteGaussDBV5Instance',
    ENLARGEGAUSSDBV5VOLUME = 'EnlargeGaussDBV5Volume',
    RESIZEGAUSSDBV5FLAVOR = 'ResizeGaussDBV5Flavor',
    GAUSSDBV5EXPANDCLUSTERCN = 'GaussDBV5ExpandClusterCN',
    GAUSSDBV5EXPANDCLUSTERDN = 'GaussDBV5ExpandClusterDN'
}
