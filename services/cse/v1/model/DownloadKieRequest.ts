import { DownloadKieReqBody } from './DownloadKieReqBody';


export class DownloadKieRequest {
    private 'X-Enterprise-Project-ID'?: string;
    private 'x-engine-id'?: string;
    public label?: string;
    public match?: DownloadKieRequestMatchEnum | string;
    public body?: DownloadKieReqBody;
    public constructor(xEngineId?: string) { 
        this['x-engine-id'] = xEngineId;
    }
    public withXEnterpriseProjectID(xEnterpriseProjectID: string): DownloadKieRequest {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
        return this;
    }
    public set xEnterpriseProjectID(xEnterpriseProjectID: string  | undefined) {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
    }
    public get xEnterpriseProjectID(): string | undefined {
        return this['X-Enterprise-Project-ID'];
    }
    public withXEngineId(xEngineId: string): DownloadKieRequest {
        this['x-engine-id'] = xEngineId;
        return this;
    }
    public set xEngineId(xEngineId: string  | undefined) {
        this['x-engine-id'] = xEngineId;
    }
    public get xEngineId(): string | undefined {
        return this['x-engine-id'];
    }
    public withLabel(label: string): DownloadKieRequest {
        this['label'] = label;
        return this;
    }
    public withMatch(match: DownloadKieRequestMatchEnum | string): DownloadKieRequest {
        this['match'] = match;
        return this;
    }
    public withBody(body: DownloadKieReqBody): DownloadKieRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DownloadKieRequestMatchEnum {
    EXACT = 'exact'
}
