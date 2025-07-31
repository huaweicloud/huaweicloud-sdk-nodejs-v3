
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCommonPortResponse extends SdkResponse {
    public port?: number;
    public type?: string;
    public status?: string;
    public description?: string;
    private 'description_en'?: string;
    public constructor() { 
        super();
    }
    public withPort(port: number): ShowCommonPortResponse {
        this['port'] = port;
        return this;
    }
    public withType(type: string): ShowCommonPortResponse {
        this['type'] = type;
        return this;
    }
    public withStatus(status: string): ShowCommonPortResponse {
        this['status'] = status;
        return this;
    }
    public withDescription(description: string): ShowCommonPortResponse {
        this['description'] = description;
        return this;
    }
    public withDescriptionEn(descriptionEn: string): ShowCommonPortResponse {
        this['description_en'] = descriptionEn;
        return this;
    }
    public set descriptionEn(descriptionEn: string  | undefined) {
        this['description_en'] = descriptionEn;
    }
    public get descriptionEn(): string | undefined {
        return this['description_en'];
    }
}