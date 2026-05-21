import { RestoreMetaDataSource } from './RestoreMetaDataSource';
import { RestoreMetaDataTarget } from './RestoreMetaDataTarget';


export class RestoreMetaData2ExistReq {
    public source?: RestoreMetaDataSource;
    public target?: RestoreMetaDataTarget;
    public constructor(source?: RestoreMetaDataSource, target?: RestoreMetaDataTarget) { 
        this['source'] = source;
        this['target'] = target;
    }
    public withSource(source: RestoreMetaDataSource): RestoreMetaData2ExistReq {
        this['source'] = source;
        return this;
    }
    public withTarget(target: RestoreMetaDataTarget): RestoreMetaData2ExistReq {
        this['target'] = target;
        return this;
    }
}