
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDatabaseObjectsResponse extends SdkResponse {
    public data?: object;
    public total?: number;
    private 'object_type'?: string;
    public constructor() { 
        super();
    }
    public withData(data: object): ListDatabaseObjectsResponse {
        this['data'] = data;
        return this;
    }
    public withTotal(total: number): ListDatabaseObjectsResponse {
        this['total'] = total;
        return this;
    }
    public withObjectType(objectType: string): ListDatabaseObjectsResponse {
        this['object_type'] = objectType;
        return this;
    }
    public set objectType(objectType: string  | undefined) {
        this['object_type'] = objectType;
    }
    public get objectType(): string | undefined {
        return this['object_type'];
    }
}