import { ChangeClusterReq } from './ChangeClusterReq';


export class ChangeClusterRequest {
    private 'storage_id'?: string;
    public body?: ChangeClusterReq;
    public constructor(storageId?: string) { 
        this['storage_id'] = storageId;
    }
    public withStorageId(storageId: string): ChangeClusterRequest {
        this['storage_id'] = storageId;
        return this;
    }
    public set storageId(storageId: string  | undefined) {
        this['storage_id'] = storageId;
    }
    public get storageId(): string | undefined {
        return this['storage_id'];
    }
    public withBody(body: ChangeClusterReq): ChangeClusterRequest {
        this['body'] = body;
        return this;
    }
}