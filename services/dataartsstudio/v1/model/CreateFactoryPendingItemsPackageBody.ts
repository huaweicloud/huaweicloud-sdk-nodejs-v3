

export class CreateFactoryPendingItemsPackageBody {
    private 'apply_user_id'?: string;
    private 'package_name'?: string;
    private 'pending_item_list'?: Array<string>;
    private 'approver_ids'?: Array<string>;
    public constructor(applyUserId?: string, packageName?: string, pendingItemList?: Array<string>, approverIds?: Array<string>) { 
        this['apply_user_id'] = applyUserId;
        this['package_name'] = packageName;
        this['pending_item_list'] = pendingItemList;
        this['approver_ids'] = approverIds;
    }
    public withApplyUserId(applyUserId: string): CreateFactoryPendingItemsPackageBody {
        this['apply_user_id'] = applyUserId;
        return this;
    }
    public set applyUserId(applyUserId: string  | undefined) {
        this['apply_user_id'] = applyUserId;
    }
    public get applyUserId(): string | undefined {
        return this['apply_user_id'];
    }
    public withPackageName(packageName: string): CreateFactoryPendingItemsPackageBody {
        this['package_name'] = packageName;
        return this;
    }
    public set packageName(packageName: string  | undefined) {
        this['package_name'] = packageName;
    }
    public get packageName(): string | undefined {
        return this['package_name'];
    }
    public withPendingItemList(pendingItemList: Array<string>): CreateFactoryPendingItemsPackageBody {
        this['pending_item_list'] = pendingItemList;
        return this;
    }
    public set pendingItemList(pendingItemList: Array<string>  | undefined) {
        this['pending_item_list'] = pendingItemList;
    }
    public get pendingItemList(): Array<string> | undefined {
        return this['pending_item_list'];
    }
    public withApproverIds(approverIds: Array<string>): CreateFactoryPendingItemsPackageBody {
        this['approver_ids'] = approverIds;
        return this;
    }
    public set approverIds(approverIds: Array<string>  | undefined) {
        this['approver_ids'] = approverIds;
    }
    public get approverIds(): Array<string> | undefined {
        return this['approver_ids'];
    }
}