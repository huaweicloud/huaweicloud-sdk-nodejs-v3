import { IdMarkDTO } from './IdMarkDTO';


export class QueryOrgVmrResultDTO {
    public id?: string;
    public vmrId?: string;
    public vmrName?: string;
    public vmrPkgName?: string;
    public vmrPkgParties?: number;
    public maxAudienceParties?: number;
    public member?: IdMarkDTO;
    public device?: IdMarkDTO;
    public status?: number;
    public expireDate?: number;
    public commercialMaxAudienceParties?: number;
    public constructor() { 
    }
    public withId(id: string): QueryOrgVmrResultDTO {
        this['id'] = id;
        return this;
    }
    public withVmrId(vmrId: string): QueryOrgVmrResultDTO {
        this['vmrId'] = vmrId;
        return this;
    }
    public withVmrName(vmrName: string): QueryOrgVmrResultDTO {
        this['vmrName'] = vmrName;
        return this;
    }
    public withVmrPkgName(vmrPkgName: string): QueryOrgVmrResultDTO {
        this['vmrPkgName'] = vmrPkgName;
        return this;
    }
    public withVmrPkgParties(vmrPkgParties: number): QueryOrgVmrResultDTO {
        this['vmrPkgParties'] = vmrPkgParties;
        return this;
    }
    public withMaxAudienceParties(maxAudienceParties: number): QueryOrgVmrResultDTO {
        this['maxAudienceParties'] = maxAudienceParties;
        return this;
    }
    public withMember(member: IdMarkDTO): QueryOrgVmrResultDTO {
        this['member'] = member;
        return this;
    }
    public withDevice(device: IdMarkDTO): QueryOrgVmrResultDTO {
        this['device'] = device;
        return this;
    }
    public withStatus(status: number): QueryOrgVmrResultDTO {
        this['status'] = status;
        return this;
    }
    public withExpireDate(expireDate: number): QueryOrgVmrResultDTO {
        this['expireDate'] = expireDate;
        return this;
    }
    public withCommercialMaxAudienceParties(commercialMaxAudienceParties: number): QueryOrgVmrResultDTO {
        this['commercialMaxAudienceParties'] = commercialMaxAudienceParties;
        return this;
    }
}