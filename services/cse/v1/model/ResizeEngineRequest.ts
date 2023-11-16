import { EngineModifyReq } from './EngineModifyReq';


export class ResizeEngineRequest {
    private 'X-Enterprise-Project-ID'?: string;
    private 'Content-Type'?: string;
    private 'Accept'?: string;
    private 'engine_id'?: string;
    public body?: EngineModifyReq;
    public constructor(contentType?: string, accept?: string, engineId?: string) { 
        this['Content-Type'] = contentType;
        this['Accept'] = accept;
        this['engine_id'] = engineId;
    }
    public withXEnterpriseProjectID(xEnterpriseProjectID: string): ResizeEngineRequest {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
        return this;
    }
    public set xEnterpriseProjectID(xEnterpriseProjectID: string  | undefined) {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
    }
    public get xEnterpriseProjectID(): string | undefined {
        return this['X-Enterprise-Project-ID'];
    }
    public withContentType(contentType: string): ResizeEngineRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withAccept(accept: string): ResizeEngineRequest {
        this['Accept'] = accept;
        return this;
    }
    public set accept(accept: string  | undefined) {
        this['Accept'] = accept;
    }
    public get accept(): string | undefined {
        return this['Accept'];
    }
    public withEngineId(engineId: string): ResizeEngineRequest {
        this['engine_id'] = engineId;
        return this;
    }
    public set engineId(engineId: string  | undefined) {
        this['engine_id'] = engineId;
    }
    public get engineId(): string | undefined {
        return this['engine_id'];
    }
    public withBody(body: EngineModifyReq): ResizeEngineRequest {
        this['body'] = body;
        return this;
    }
}