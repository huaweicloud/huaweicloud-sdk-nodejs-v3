

export class CreateSpaceAnalysisTaskBody {
    public operate?: CreateSpaceAnalysisTaskBodyOperateEnum | string;
    private 'datastore_type'?: CreateSpaceAnalysisTaskBodyDatastoreTypeEnum | string;
    public constructor(operate?: string, datastoreType?: string) { 
        this['operate'] = operate;
        this['datastore_type'] = datastoreType;
    }
    public withOperate(operate: CreateSpaceAnalysisTaskBodyOperateEnum | string): CreateSpaceAnalysisTaskBody {
        this['operate'] = operate;
        return this;
    }
    public withDatastoreType(datastoreType: CreateSpaceAnalysisTaskBodyDatastoreTypeEnum | string): CreateSpaceAnalysisTaskBody {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: CreateSpaceAnalysisTaskBodyDatastoreTypeEnum | string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): CreateSpaceAnalysisTaskBodyDatastoreTypeEnum | string | undefined {
        return this['datastore_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateSpaceAnalysisTaskBodyOperateEnum {
    REANALYSIS = 'reanalysis'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateSpaceAnalysisTaskBodyDatastoreTypeEnum {
    MYSQL = 'MySQL',
    GAUSSDB_FOR_MYSQL = 'GaussDB(for MySQL)'
}
