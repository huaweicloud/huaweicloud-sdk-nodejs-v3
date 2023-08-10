
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateFsDirQuotaResponse extends SdkResponse {
    public path?: string;
    public capacity?: number;
    public inode?: number;
    private 'used_capacity'?: number;
    private 'used_inode'?: number;
    public constructor() { 
        super();
    }
    public withPath(path: string): CreateFsDirQuotaResponse {
        this['path'] = path;
        return this;
    }
    public withCapacity(capacity: number): CreateFsDirQuotaResponse {
        this['capacity'] = capacity;
        return this;
    }
    public withInode(inode: number): CreateFsDirQuotaResponse {
        this['inode'] = inode;
        return this;
    }
    public withUsedCapacity(usedCapacity: number): CreateFsDirQuotaResponse {
        this['used_capacity'] = usedCapacity;
        return this;
    }
    public set usedCapacity(usedCapacity: number  | undefined) {
        this['used_capacity'] = usedCapacity;
    }
    public get usedCapacity(): number | undefined {
        return this['used_capacity'];
    }
    public withUsedInode(usedInode: number): CreateFsDirQuotaResponse {
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