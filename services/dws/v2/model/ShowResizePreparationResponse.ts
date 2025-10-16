
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowResizePreparationResponse extends SdkResponse {
    public status?: string;
    private 'is_support'?: boolean;
    public progress?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowResizePreparationResponse {
        this['status'] = status;
        return this;
    }
    public withIsSupport(isSupport: boolean): ShowResizePreparationResponse {
        this['is_support'] = isSupport;
        return this;
    }
    public set isSupport(isSupport: boolean  | undefined) {
        this['is_support'] = isSupport;
    }
    public get isSupport(): boolean | undefined {
        return this['is_support'];
    }
    public withProgress(progress: string): ShowResizePreparationResponse {
        this['progress'] = progress;
        return this;
    }
}