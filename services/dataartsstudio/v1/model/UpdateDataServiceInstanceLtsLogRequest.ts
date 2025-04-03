import { LtsLogDump } from './LtsLogDump';


export class UpdateDataServiceInstanceLtsLogRequest {
    public workspace?: string;
    private 'Dlm-Type'?: UpdateDataServiceInstanceLtsLogRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    private 'instance_id'?: string;
    public body?: LtsLogDump;
    public constructor(workspace?: string, instanceId?: string) { 
        this['workspace'] = workspace;
        this['instance_id'] = instanceId;
    }
    public withWorkspace(workspace: string): UpdateDataServiceInstanceLtsLogRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: UpdateDataServiceInstanceLtsLogRequestDlmTypeEnum | string): UpdateDataServiceInstanceLtsLogRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: UpdateDataServiceInstanceLtsLogRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): UpdateDataServiceInstanceLtsLogRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): UpdateDataServiceInstanceLtsLogRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withInstanceId(instanceId: string): UpdateDataServiceInstanceLtsLogRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: LtsLogDump): UpdateDataServiceInstanceLtsLogRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateDataServiceInstanceLtsLogRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
