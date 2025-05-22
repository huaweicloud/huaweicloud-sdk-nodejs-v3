
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateFactoryPendingItemsPackageResponse extends SdkResponse {
    private 'package_name'?: string;
    private 'release_package_id'?: string;
    public constructor() { 
        super();
    }
    public withPackageName(packageName: string): CreateFactoryPendingItemsPackageResponse {
        this['package_name'] = packageName;
        return this;
    }
    public set packageName(packageName: string  | undefined) {
        this['package_name'] = packageName;
    }
    public get packageName(): string | undefined {
        return this['package_name'];
    }
    public withReleasePackageId(releasePackageId: string): CreateFactoryPendingItemsPackageResponse {
        this['release_package_id'] = releasePackageId;
        return this;
    }
    public set releasePackageId(releasePackageId: string  | undefined) {
        this['release_package_id'] = releasePackageId;
    }
    public get releasePackageId(): string | undefined {
        return this['release_package_id'];
    }
}