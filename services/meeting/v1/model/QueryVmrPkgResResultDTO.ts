

export class QueryVmrPkgResResultDTO {
    public vmrPkgId?: string;
    public vmrName?: string;
    public vmrPkgParties?: number;
    public vmrPkgCount?: number;
    public vmrPkgUsedCount?: number;
    public constructor() { 
    }
    public withVmrPkgId(vmrPkgId: string): QueryVmrPkgResResultDTO {
        this['vmrPkgId'] = vmrPkgId;
        return this;
    }
    public withVmrName(vmrName: string): QueryVmrPkgResResultDTO {
        this['vmrName'] = vmrName;
        return this;
    }
    public withVmrPkgParties(vmrPkgParties: number): QueryVmrPkgResResultDTO {
        this['vmrPkgParties'] = vmrPkgParties;
        return this;
    }
    public withVmrPkgCount(vmrPkgCount: number): QueryVmrPkgResResultDTO {
        this['vmrPkgCount'] = vmrPkgCount;
        return this;
    }
    public withVmrPkgUsedCount(vmrPkgUsedCount: number): QueryVmrPkgResResultDTO {
        this['vmrPkgUsedCount'] = vmrPkgUsedCount;
        return this;
    }
}