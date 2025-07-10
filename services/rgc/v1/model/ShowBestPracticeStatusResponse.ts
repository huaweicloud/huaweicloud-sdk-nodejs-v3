
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBestPracticeStatusResponse extends SdkResponse {
    private 'operation_id'?: string;
    public status?: string;
    private 'percentage_complete'?: number;
    private 'error_messages'?: Array<string>;
    public constructor() { 
        super();
    }
    public withOperationId(operationId: string): ShowBestPracticeStatusResponse {
        this['operation_id'] = operationId;
        return this;
    }
    public set operationId(operationId: string  | undefined) {
        this['operation_id'] = operationId;
    }
    public get operationId(): string | undefined {
        return this['operation_id'];
    }
    public withStatus(status: string): ShowBestPracticeStatusResponse {
        this['status'] = status;
        return this;
    }
    public withPercentageComplete(percentageComplete: number): ShowBestPracticeStatusResponse {
        this['percentage_complete'] = percentageComplete;
        return this;
    }
    public set percentageComplete(percentageComplete: number  | undefined) {
        this['percentage_complete'] = percentageComplete;
    }
    public get percentageComplete(): number | undefined {
        return this['percentage_complete'];
    }
    public withErrorMessages(errorMessages: Array<string>): ShowBestPracticeStatusResponse {
        this['error_messages'] = errorMessages;
        return this;
    }
    public set errorMessages(errorMessages: Array<string>  | undefined) {
        this['error_messages'] = errorMessages;
    }
    public get errorMessages(): Array<string> | undefined {
        return this['error_messages'];
    }
}