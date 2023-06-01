
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTemplateVersionContentResponse extends SdkResponse {
    private 'Location'?: string | undefined;
    public constructor() { 
        super();
    }
    public withLocation(location: string): ShowTemplateVersionContentResponse {
        this['Location'] = location;
        return this;
    }
    public set location(location: string | undefined) {
        this['Location'] = location;
    }
    public get location() {
        return this['Location'];
    }
}