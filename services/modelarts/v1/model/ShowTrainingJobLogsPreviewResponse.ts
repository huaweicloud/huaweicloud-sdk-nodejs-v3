
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTrainingJobLogsPreviewResponse extends SdkResponse {
    public content?: string;
    private 'current_size'?: number;
    private 'full_size'?: number;
    public constructor() { 
        super();
    }
    public withContent(content: string): ShowTrainingJobLogsPreviewResponse {
        this['content'] = content;
        return this;
    }
    public withCurrentSize(currentSize: number): ShowTrainingJobLogsPreviewResponse {
        this['current_size'] = currentSize;
        return this;
    }
    public set currentSize(currentSize: number  | undefined) {
        this['current_size'] = currentSize;
    }
    public get currentSize(): number | undefined {
        return this['current_size'];
    }
    public withFullSize(fullSize: number): ShowTrainingJobLogsPreviewResponse {
        this['full_size'] = fullSize;
        return this;
    }
    public set fullSize(fullSize: number  | undefined) {
        this['full_size'] = fullSize;
    }
    public get fullSize(): number | undefined {
        return this['full_size'];
    }
}