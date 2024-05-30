import { BatchOperationVO } from './BatchOperationVO';


export class DsProcessImportResultVO {
    public status?: DsProcessImportResultVOStatusEnum | string;
    public group?: BatchOperationVO;
    public rate?: string;
    public constructor() { 
    }
    public withStatus(status: DsProcessImportResultVOStatusEnum | string): DsProcessImportResultVO {
        this['status'] = status;
        return this;
    }
    public withGroup(group: BatchOperationVO): DsProcessImportResultVO {
        this['group'] = group;
        return this;
    }
    public withRate(rate: string): DsProcessImportResultVO {
        this['rate'] = rate;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DsProcessImportResultVOStatusEnum {
    IMPORTING = 'importing',
    FAIL = 'fail',
    SUCCESS = 'success'
}
