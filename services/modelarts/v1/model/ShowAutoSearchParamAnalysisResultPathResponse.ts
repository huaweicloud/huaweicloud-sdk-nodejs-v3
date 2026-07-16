
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAutoSearchParamAnalysisResultPathResponse extends SdkResponse {
    private 'file_path'?: string;
    public constructor() { 
        super();
    }
    public withFilePath(filePath: string): ShowAutoSearchParamAnalysisResultPathResponse {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
}