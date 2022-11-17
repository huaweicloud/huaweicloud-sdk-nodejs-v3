

export class DeleteEngineRequest {
    private 'X-Enterprise-Project-ID'?: string | undefined;
    private 'engine_id': string | undefined;
    public constructor(engineId?: any) { 
        this['engine_id'] = engineId;
    }
    public withXEnterpriseProjectID(xEnterpriseProjectID: string): DeleteEngineRequest {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
        return this;
    }
    public set xEnterpriseProjectID(xEnterpriseProjectID: string | undefined) {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
    }
    public get xEnterpriseProjectID() {
        return this['X-Enterprise-Project-ID'];
    }
    public withEngineId(engineId: string): DeleteEngineRequest {
        this['engine_id'] = engineId;
        return this;
    }
    public set engineId(engineId: string | undefined) {
        this['engine_id'] = engineId;
    }
    public get engineId() {
        return this['engine_id'];
    }
}