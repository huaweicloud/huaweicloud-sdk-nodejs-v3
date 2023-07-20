import { EngineCreateReq } from './EngineCreateReq';


export class CreateEngineRequest {
    private 'X-Enterprise-Project-ID'?: string;
    public body?: EngineCreateReq;
    public constructor() { 
    }
    public withXEnterpriseProjectID(xEnterpriseProjectID: string): CreateEngineRequest {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
        return this;
    }
    public set xEnterpriseProjectID(xEnterpriseProjectID: string  | undefined) {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
    }
    public get xEnterpriseProjectID(): string | undefined {
        return this['X-Enterprise-Project-ID'];
    }
    public withBody(body: EngineCreateReq): CreateEngineRequest {
        this['body'] = body;
        return this;
    }
}