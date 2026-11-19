import { UpgradeDbVersionFinalConfirmRequestBody } from './UpgradeDbVersionFinalConfirmRequestBody';


export class UpgradeDbVersionFinalConfirmRequest {
    private 'Content-Type'?: string;
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    public body?: UpgradeDbVersionFinalConfirmRequestBody;
    public constructor(contentType?: string, instanceId?: string) { 
        this['Content-Type'] = contentType;
        this['instance_id'] = instanceId;
    }
    public withContentType(contentType: string): UpgradeDbVersionFinalConfirmRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withXLanguage(xLanguage: string): UpgradeDbVersionFinalConfirmRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): UpgradeDbVersionFinalConfirmRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UpgradeDbVersionFinalConfirmRequestBody): UpgradeDbVersionFinalConfirmRequest {
        this['body'] = body;
        return this;
    }
}