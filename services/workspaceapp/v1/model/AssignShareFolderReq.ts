import { Assignment } from './Assignment';
import { Attachment } from './Attachment';


export class AssignShareFolderReq {
    private 'storage_claim_id'?: string;
    private 'add_items'?: Array<Assignment>;
    private 'del_items'?: Array<Attachment>;
    public constructor(storageClaimId?: string) { 
        this['storage_claim_id'] = storageClaimId;
    }
    public withStorageClaimId(storageClaimId: string): AssignShareFolderReq {
        this['storage_claim_id'] = storageClaimId;
        return this;
    }
    public set storageClaimId(storageClaimId: string  | undefined) {
        this['storage_claim_id'] = storageClaimId;
    }
    public get storageClaimId(): string | undefined {
        return this['storage_claim_id'];
    }
    public withAddItems(addItems: Array<Assignment>): AssignShareFolderReq {
        this['add_items'] = addItems;
        return this;
    }
    public set addItems(addItems: Array<Assignment>  | undefined) {
        this['add_items'] = addItems;
    }
    public get addItems(): Array<Assignment> | undefined {
        return this['add_items'];
    }
    public withDelItems(delItems: Array<Attachment>): AssignShareFolderReq {
        this['del_items'] = delItems;
        return this;
    }
    public set delItems(delItems: Array<Attachment>  | undefined) {
        this['del_items'] = delItems;
    }
    public get delItems(): Array<Attachment> | undefined {
        return this['del_items'];
    }
}