import { BatchOperationVO } from './BatchOperationVO';


export class DsExportResultVOData {
    public status?: DsExportResultVODataStatusEnum | string;
    public group?: BatchOperationVO;
    public rate?: string;
    public constructor() { 
    }
    public withStatus(status: DsExportResultVODataStatusEnum | string): DsExportResultVOData {
        this['status'] = status;
        return this;
    }
    public withGroup(group: BatchOperationVO): DsExportResultVOData {
        this['group'] = group;
        return this;
    }
    public withRate(rate: string): DsExportResultVOData {
        this['rate'] = rate;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DsExportResultVODataStatusEnum {
    IMPORTING = 'importing',
    FAIL = 'fail',
    SUCCESS = 'success'
}
