import { ObsLogDump } from './ObsLogDump';


export class UpdateDataServiceInstanceObsLogRequest {
    public workspace?: string;
    private 'Dlm-Type'?: UpdateDataServiceInstanceObsLogRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    private 'instance_id'?: string;
    public body?: ObsLogDump;
    public constructor(workspace?: string, instanceId?: string) { 
        this['workspace'] = workspace;
        this['instance_id'] = instanceId;
    }
    public withWorkspace(workspace: string): UpdateDataServiceInstanceObsLogRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: UpdateDataServiceInstanceObsLogRequestDlmTypeEnum | string): UpdateDataServiceInstanceObsLogRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: UpdateDataServiceInstanceObsLogRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): UpdateDataServiceInstanceObsLogRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): UpdateDataServiceInstanceObsLogRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withInstanceId(instanceId: string): UpdateDataServiceInstanceObsLogRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ObsLogDump): UpdateDataServiceInstanceObsLogRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateDataServiceInstanceObsLogRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
