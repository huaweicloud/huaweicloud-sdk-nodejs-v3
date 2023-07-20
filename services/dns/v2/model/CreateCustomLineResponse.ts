
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateCustomLineResponse extends SdkResponse {
    private 'line_id'?: string;
    public name?: string;
    private 'ip_segments'?: Array<string>;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public status?: string;
    public description?: string;
    public constructor() { 
        super();
    }
    public withLineId(lineId: string): CreateCustomLineResponse {
        this['line_id'] = lineId;
        return this;
    }
    public set lineId(lineId: string  | undefined) {
        this['line_id'] = lineId;
    }
    public get lineId(): string | undefined {
        return this['line_id'];
    }
    public withName(name: string): CreateCustomLineResponse {
        this['name'] = name;
        return this;
    }
    public withIpSegments(ipSegments: Array<string>): CreateCustomLineResponse {
        this['ip_segments'] = ipSegments;
        return this;
    }
    public set ipSegments(ipSegments: Array<string>  | undefined) {
        this['ip_segments'] = ipSegments;
    }
    public get ipSegments(): Array<string> | undefined {
        return this['ip_segments'];
    }
    public withCreatedAt(createdAt: string): CreateCustomLineResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): CreateCustomLineResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withStatus(status: string): CreateCustomLineResponse {
        this['status'] = status;
        return this;
    }
    public withDescription(description: string): CreateCustomLineResponse {
        this['description'] = description;
        return this;
    }
}