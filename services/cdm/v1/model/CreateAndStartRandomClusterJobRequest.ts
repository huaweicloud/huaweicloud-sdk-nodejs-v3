import { CdmRandomCreateAndStartJobJsonReq } from './CdmRandomCreateAndStartJobJsonReq';


export class CreateAndStartRandomClusterJobRequest {
    private 'X-Language'?: string;
    public body?: CdmRandomCreateAndStartJobJsonReq;
    public constructor(xLanguage?: string) { 
        this['X-Language'] = xLanguage;
    }
    public withXLanguage(xLanguage: string): CreateAndStartRandomClusterJobRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: CdmRandomCreateAndStartJobJsonReq): CreateAndStartRandomClusterJobRequest {
        this['body'] = body;
        return this;
    }
}