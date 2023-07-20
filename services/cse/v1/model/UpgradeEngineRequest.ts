import { EngineUpdateReq } from './EngineUpdateReq';


export class UpgradeEngineRequest {
    private 'X-Enterprise-Project-ID'?: string;
    private 'engine_id'?: string;
    public body?: EngineUpdateReq;
    public constructor(engineId?: string) { 
        this['engine_id'] = engineId;
    }
    public withXEnterpriseProjectID(xEnterpriseProjectID: string): UpgradeEngineRequest {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
        return this;
    }
    public set xEnterpriseProjectID(xEnterpriseProjectID: string  | undefined) {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
    }
    public get xEnterpriseProjectID(): string | undefined {
        return this['X-Enterprise-Project-ID'];
    }
    public withEngineId(engineId: string): UpgradeEngineRequest {
        this['engine_id'] = engineId;
        return this;
    }
    public set engineId(engineId: string  | undefined) {
        this['engine_id'] = engineId;
    }
    public get engineId(): string | undefined {
        return this['engine_id'];
    }
    public withBody(body: EngineUpdateReq): UpgradeEngineRequest {
        this['body'] = body;
        return this;
    }
}