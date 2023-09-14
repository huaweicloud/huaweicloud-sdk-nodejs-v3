import { UpdateVersionRequestBody } from './UpdateVersionRequestBody';


export class UpdateVersionRequest {
    private 'secret_name'?: string;
    private 'version_id'?: string;
    public body?: UpdateVersionRequestBody;
    public constructor(secretName?: string, versionId?: string) { 
        this['secret_name'] = secretName;
        this['version_id'] = versionId;
    }
    public withSecretName(secretName: string): UpdateVersionRequest {
        this['secret_name'] = secretName;
        return this;
    }
    public set secretName(secretName: string  | undefined) {
        this['secret_name'] = secretName;
    }
    public get secretName(): string | undefined {
        return this['secret_name'];
    }
    public withVersionId(versionId: string): UpdateVersionRequest {
        this['version_id'] = versionId;
        return this;
    }
    public set versionId(versionId: string  | undefined) {
        this['version_id'] = versionId;
    }
    public get versionId(): string | undefined {
        return this['version_id'];
    }
    public withBody(body: UpdateVersionRequestBody): UpdateVersionRequest {
        this['body'] = body;
        return this;
    }
}