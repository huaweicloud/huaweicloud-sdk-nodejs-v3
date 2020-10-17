import { PropertiesInfo } from './PropertiesInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTemplateDetailResponse extends SdkResponse {
    public id?: string;
    public title?: string;
    public description?: string;
    public regionId?: string;
    public repostoryId?: string;
    public codeUrl?: string;
    public sshUrl?: string;
    public projectUuid?: string;
    public status?: number;
    public properties?: Array<PropertiesInfo>;
    public constructor() { 
        super();
    }
    public withId(id?: string): ShowTemplateDetailResponse {
        this.id = id;
        return this;
    }
    public withTitle(title?: string): ShowTemplateDetailResponse {
        this.title = title;
        return this;
    }
    public withDescription(description?: string): ShowTemplateDetailResponse {
        this.description = description;
        return this;
    }
    public withRegionId(regionId?: string): ShowTemplateDetailResponse {
        this.regionId = regionId;
        return this;
    }
    public withRepostoryId(repostoryId?: string): ShowTemplateDetailResponse {
        this.repostoryId = repostoryId;
        return this;
    }
    public withCodeUrl(codeUrl?: string): ShowTemplateDetailResponse {
        this.codeUrl = codeUrl;
        return this;
    }
    public withSshUrl(sshUrl?: string): ShowTemplateDetailResponse {
        this.sshUrl = sshUrl;
        return this;
    }
    public withProjectUuid(projectUuid?: string): ShowTemplateDetailResponse {
        this.projectUuid = projectUuid;
        return this;
    }
    public withStatus(status?: number): ShowTemplateDetailResponse {
        this.status = status;
        return this;
    }
    public withProperties(properties?: Array<PropertiesInfo>): ShowTemplateDetailResponse {
        this.properties = properties;
        return this;
    }
}