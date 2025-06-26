import { OrganizationalPercentageDetail } from './OrganizationalPercentageDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowOperationResponse extends SdkResponse {
    private 'operation_id'?: string;
    private 'percentage_complete'?: number;
    public status?: string;
    private 'percentage_details'?: Array<OrganizationalPercentageDetail>;
    public message?: string;
    public constructor() { 
        super();
    }
    public withOperationId(operationId: string): ShowOperationResponse {
        this['operation_id'] = operationId;
        return this;
    }
    public set operationId(operationId: string  | undefined) {
        this['operation_id'] = operationId;
    }
    public get operationId(): string | undefined {
        return this['operation_id'];
    }
    public withPercentageComplete(percentageComplete: number): ShowOperationResponse {
        this['percentage_complete'] = percentageComplete;
        return this;
    }
    public set percentageComplete(percentageComplete: number  | undefined) {
        this['percentage_complete'] = percentageComplete;
    }
    public get percentageComplete(): number | undefined {
        return this['percentage_complete'];
    }
    public withStatus(status: string): ShowOperationResponse {
        this['status'] = status;
        return this;
    }
    public withPercentageDetails(percentageDetails: Array<OrganizationalPercentageDetail>): ShowOperationResponse {
        this['percentage_details'] = percentageDetails;
        return this;
    }
    public set percentageDetails(percentageDetails: Array<OrganizationalPercentageDetail>  | undefined) {
        this['percentage_details'] = percentageDetails;
    }
    public get percentageDetails(): Array<OrganizationalPercentageDetail> | undefined {
        return this['percentage_details'];
    }
    public withMessage(message: string): ShowOperationResponse {
        this['message'] = message;
        return this;
    }
}