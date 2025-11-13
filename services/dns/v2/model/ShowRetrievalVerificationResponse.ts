
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRetrievalVerificationResponse extends SdkResponse {
    public id?: string;
    public status?: string;
    private 'updated_at'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowRetrievalVerificationResponse {
        this['id'] = id;
        return this;
    }
    public withStatus(status: string): ShowRetrievalVerificationResponse {
        this['status'] = status;
        return this;
    }
    public withUpdatedAt(updatedAt: string): ShowRetrievalVerificationResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
}