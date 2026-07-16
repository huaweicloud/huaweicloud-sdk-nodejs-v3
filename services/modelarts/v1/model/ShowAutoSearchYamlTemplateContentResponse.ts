
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAutoSearchYamlTemplateContentResponse extends SdkResponse {
    private 'file_name'?: string;
    public content?: string;
    public constructor() { 
        super();
    }
    public withFileName(fileName: string): ShowAutoSearchYamlTemplateContentResponse {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withContent(content: string): ShowAutoSearchYamlTemplateContentResponse {
        this['content'] = content;
        return this;
    }
}