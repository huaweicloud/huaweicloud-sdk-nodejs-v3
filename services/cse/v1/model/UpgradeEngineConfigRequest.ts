import { EngineConfigureReq } from './EngineConfigureReq';


export class UpgradeEngineConfigRequest {
    private 'X-Enterprise-Project-ID'?: string;
    private 'engine_id'?: string;
    public body?: EngineConfigureReq;
    public constructor(engineId?: string) { 
        this['engine_id'] = engineId;
    }
    public withXEnterpriseProjectID(xEnterpriseProjectID: string): UpgradeEngineConfigRequest {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
        return this;
    }
    public set xEnterpriseProjectID(xEnterpriseProjectID: string  | undefined) {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
    }
    public get xEnterpriseProjectID(): string | undefined {
        return this['X-Enterprise-Project-ID'];
    }
    public withEngineId(engineId: string): UpgradeEngineConfigRequest {
        this['engine_id'] = engineId;
        return this;
    }
    public set engineId(engineId: string  | undefined) {
        this['engine_id'] = engineId;
    }
    public get engineId(): string | undefined {
        return this['engine_id'];
    }
    public withBody(body: EngineConfigureReq): UpgradeEngineConfigRequest {
        this['body'] = body;
        return this;
    }
}