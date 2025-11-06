
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCertsDetailResponse extends SdkResponse {
    public id?: string;
    public fileName?: string;
    public fileLocation?: string;
    public status?: string;
    public updateAt?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowCertsDetailResponse {
        this['id'] = id;
        return this;
    }
    public withFileName(fileName: string): ShowCertsDetailResponse {
        this['fileName'] = fileName;
        return this;
    }
    public withFileLocation(fileLocation: string): ShowCertsDetailResponse {
        this['fileLocation'] = fileLocation;
        return this;
    }
    public withStatus(status: string): ShowCertsDetailResponse {
        this['status'] = status;
        return this;
    }
    public withUpdateAt(updateAt: string): ShowCertsDetailResponse {
        this['updateAt'] = updateAt;
        return this;
    }
}