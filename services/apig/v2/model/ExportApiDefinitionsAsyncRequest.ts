import { ExportOpenApiReq } from './ExportOpenApiReq';


export class ExportApiDefinitionsAsyncRequest {
    private 'instance_id'?: string;
    private 'oas_version'?: ExportApiDefinitionsAsyncRequestOasVersionEnum | string;
    public body?: ExportOpenApiReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ExportApiDefinitionsAsyncRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOasVersion(oasVersion: ExportApiDefinitionsAsyncRequestOasVersionEnum | string): ExportApiDefinitionsAsyncRequest {
        this['oas_version'] = oasVersion;
        return this;
    }
    public set oasVersion(oasVersion: ExportApiDefinitionsAsyncRequestOasVersionEnum | string  | undefined) {
        this['oas_version'] = oasVersion;
    }
    public get oasVersion(): ExportApiDefinitionsAsyncRequestOasVersionEnum | string | undefined {
        return this['oas_version'];
    }
    public withBody(body: ExportOpenApiReq): ExportApiDefinitionsAsyncRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExportApiDefinitionsAsyncRequestOasVersionEnum {
    E_2_0 = '2.0',
    E_3_0 = '3.0'
}
