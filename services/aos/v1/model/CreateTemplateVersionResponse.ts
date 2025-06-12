
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateTemplateVersionResponse extends SdkResponse {
    private 'version_id'?: string;
    public constructor() { 
        super();
    }
    public withVersionId(versionId: string): CreateTemplateVersionResponse {
        this['version_id'] = versionId;
        return this;
    }
    public set versionId(versionId: string  | undefined) {
        this['version_id'] = versionId;
    }
    public get versionId(): string | undefined {
        return this['version_id'];
    }
}