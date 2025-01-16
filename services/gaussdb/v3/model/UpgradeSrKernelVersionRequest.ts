import { UpgradeSrKernelVersionRequestV3 } from './UpgradeSrKernelVersionRequestV3';


export class UpgradeSrKernelVersionRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    public body?: UpgradeSrKernelVersionRequestV3;
    public constructor(xLanguage?: string, instanceId?: string) { 
        this['X-Language'] = xLanguage;
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: string): UpgradeSrKernelVersionRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): UpgradeSrKernelVersionRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UpgradeSrKernelVersionRequestV3): UpgradeSrKernelVersionRequest {
        this['body'] = body;
        return this;
    }
}