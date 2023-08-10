
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateFsDirQuotaResponse extends SdkResponse {
    public path?: string;
    public capacity?: number;
    public inode?: number;
    private 'used_capacity'?: number;
    private 'used_inode'?: number;
    public constructor() { 
        super();
    }
    public withPath(path: string): UpdateFsDirQuotaResponse {
        this['path'] = path;
        return this;
    }
    public withCapacity(capacity: number): UpdateFsDirQuotaResponse {
        this['capacity'] = capacity;
        return this;
    }
    public withInode(inode: number): UpdateFsDirQuotaResponse {
        this['inode'] = inode;
        return this;
    }
    public withUsedCapacity(usedCapacity: number): UpdateFsDirQuotaResponse {
        this['used_capacity'] = usedCapacity;
        return this;
    }
    public set usedCapacity(usedCapacity: number  | undefined) {
        this['used_capacity'] = usedCapacity;
    }
    public get usedCapacity(): number | undefined {
        return this['used_capacity'];
    }
    public withUsedInode(usedInode: number): UpdateFsDirQuotaResponse {
        this['used_inode'] = usedInode;
        return this;
    }
    public set usedInode(usedInode: number  | undefined) {
        this['used_inode'] = usedInode;
    }
    public get usedInode(): number | undefined {
        return this['used_inode'];
    }
}