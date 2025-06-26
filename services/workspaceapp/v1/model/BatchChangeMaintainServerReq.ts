import { ServerIdSet } from './ServerIdSet';


export class BatchChangeMaintainServerReq {
    public items?: Array<string>;
    private 'maintain_status'?: boolean;
    public constructor(items?: Array<string>, maintainStatus?: boolean) { 
        this['items'] = items;
        this['maintain_status'] = maintainStatus;
    }
    public withItems(items: Array<string>): BatchChangeMaintainServerReq {
        this['items'] = items;
        return this;
    }
    public withMaintainStatus(maintainStatus: boolean): BatchChangeMaintainServerReq {
        this['maintain_status'] = maintainStatus;
        return this;
    }
    public set maintainStatus(maintainStatus: boolean  | undefined) {
        this['maintain_status'] = maintainStatus;
    }
    public get maintainStatus(): boolean | undefined {
        return this['maintain_status'];
    }
}