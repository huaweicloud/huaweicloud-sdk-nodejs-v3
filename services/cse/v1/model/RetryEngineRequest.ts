import { EngineAdditionalActionReq } from './EngineAdditionalActionReq';


export class RetryEngineRequest {
    private 'X-Enterprise-Project-ID'?: string | undefined;
    private 'engine_id': string | undefined;
    public body?: EngineAdditionalActionReq;
    public constructor(engineId?: any) { 
        this['engine_id'] = engineId;
    }
    public withXEnterpriseProjectID(xEnterpriseProjectID: string): RetryEngineRequest {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
        return this;
    }
    public set xEnterpriseProjectID(xEnterpriseProjectID: string | undefined) {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
    }
    public get xEnterpriseProjectID() {
        return this['X-Enterprise-Project-ID'];
    }
    public withEngineId(engineId: string): RetryEngineRequest {
        this['engine_id'] = engineId;
        return this;
    }
    public set engineId(engineId: string | undefined) {
        this['engine_id'] = engineId;
    }
    public get engineId() {
        return this['engine_id'];
    }
    public withBody(body: EngineAdditionalActionReq): RetryEngineRequest {
        this['body'] = body;
        return this;
    }
}