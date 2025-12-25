
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteDataspaceResponse extends SdkResponse {
    private 'dataspace_id'?: string;
    public constructor() { 
        super();
    }
    public withDataspaceId(dataspaceId: string): DeleteDataspaceResponse {
        this['dataspace_id'] = dataspaceId;
        return this;
    }
    public set dataspaceId(dataspaceId: string  | undefined) {
        this['dataspace_id'] = dataspaceId;
    }
    public get dataspaceId(): string | undefined {
        return this['dataspace_id'];
    }
}