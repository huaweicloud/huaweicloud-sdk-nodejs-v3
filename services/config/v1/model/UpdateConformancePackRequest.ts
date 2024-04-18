import { UpdateConformancePackRequestBody } from './UpdateConformancePackRequestBody';


export class UpdateConformancePackRequest {
    private 'conformance_pack_id'?: string;
    public body?: UpdateConformancePackRequestBody;
    public constructor(conformancePackId?: string) { 
        this['conformance_pack_id'] = conformancePackId;
    }
    public withConformancePackId(conformancePackId: string): UpdateConformancePackRequest {
        this['conformance_pack_id'] = conformancePackId;
        return this;
    }
    public set conformancePackId(conformancePackId: string  | undefined) {
        this['conformance_pack_id'] = conformancePackId;
    }
    public get conformancePackId(): string | undefined {
        return this['conformance_pack_id'];
    }
    public withBody(body: UpdateConformancePackRequestBody): UpdateConformancePackRequest {
        this['body'] = body;
        return this;
    }
}