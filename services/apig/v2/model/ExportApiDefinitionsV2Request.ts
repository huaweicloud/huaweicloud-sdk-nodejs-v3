import { ExportOpenApiReq } from './ExportOpenApiReq';


export class ExportApiDefinitionsV2Request {
    private 'instance_id'?: string;
    private 'oas_version'?: ExportApiDefinitionsV2RequestOasVersionEnum | string;
    public body?: ExportOpenApiReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ExportApiDefinitionsV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOasVersion(oasVersion: ExportApiDefinitionsV2RequestOasVersionEnum | string): ExportApiDefinitionsV2Request {
        this['oas_version'] = oasVersion;
        return this;
    }
    public set oasVersion(oasVersion: ExportApiDefinitionsV2RequestOasVersionEnum | string  | undefined) {
        this['oas_version'] = oasVersion;
    }
    public get oasVersion(): ExportApiDefinitionsV2RequestOasVersionEnum | string | undefined {
        return this['oas_version'];
    }
    public withBody(body: ExportOpenApiReq): ExportApiDefinitionsV2Request {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExportApiDefinitionsV2RequestOasVersionEnum {
    E_2_0 = '2.0',
    E_3_0 = '3.0'
}
