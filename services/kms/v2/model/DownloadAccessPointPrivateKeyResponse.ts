
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DownloadAccessPointPrivateKeyResponse extends SdkResponse {
    private 'access_point_id'?: string;
    private 'private_key'?: string;
    public constructor() { 
        super();
    }
    public withAccessPointId(accessPointId: string): DownloadAccessPointPrivateKeyResponse {
        this['access_point_id'] = accessPointId;
        return this;
    }
    public set accessPointId(accessPointId: string  | undefined) {
        this['access_point_id'] = accessPointId;
    }
    public get accessPointId(): string | undefined {
        return this['access_point_id'];
    }
    public withPrivateKey(privateKey: string): DownloadAccessPointPrivateKeyResponse {
        this['private_key'] = privateKey;
        return this;
    }
    public set privateKey(privateKey: string  | undefined) {
        this['private_key'] = privateKey;
    }
    public get privateKey(): string | undefined {
        return this['private_key'];
    }
}