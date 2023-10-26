

export class CdmStartClusterReq {
    public start?: object;
    public constructor(start?: object) { 
        this['start'] = start;
    }
    public withStart(start: object): CdmStartClusterReq {
        this['start'] = start;
        return this;
    }
}