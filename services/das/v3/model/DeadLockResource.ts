import { DeadLockObject } from './DeadLockObject';


export class DeadLockResource {
    private 'lock_label'?: string;
    private 'db_id'?: string;
    private 'db_name'?: string;
    private 'index_name'?: string;
    private 'associated_object_id'?: string;
    private 'object_name'?: string;
    private 'lock_mode'?: string;
    private 'owner_list'?: Array<DeadLockObject>;
    private 'waiter_list'?: Array<DeadLockObject>;
    public constructor() { 
    }
    public withLockLabel(lockLabel: string): DeadLockResource {
        this['lock_label'] = lockLabel;
        return this;
    }
    public set lockLabel(lockLabel: string  | undefined) {
        this['lock_label'] = lockLabel;
    }
    public get lockLabel(): string | undefined {
        return this['lock_label'];
    }
    public withDbId(dbId: string): DeadLockResource {
        this['db_id'] = dbId;
        return this;
    }
    public set dbId(dbId: string  | undefined) {
        this['db_id'] = dbId;
    }
    public get dbId(): string | undefined {
        return this['db_id'];
    }
    public withDbName(dbName: string): DeadLockResource {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withIndexName(indexName: string): DeadLockResource {
        this['index_name'] = indexName;
        return this;
    }
    public set indexName(indexName: string  | undefined) {
        this['index_name'] = indexName;
    }
    public get indexName(): string | undefined {
        return this['index_name'];
    }
    public withAssociatedObjectId(associatedObjectId: string): DeadLockResource {
        this['associated_object_id'] = associatedObjectId;
        return this;
    }
    public set associatedObjectId(associatedObjectId: string  | undefined) {
        this['associated_object_id'] = associatedObjectId;
    }
    public get associatedObjectId(): string | undefined {
        return this['associated_object_id'];
    }
    public withObjectName(objectName: string): DeadLockResource {
        this['object_name'] = objectName;
        return this;
    }
    public set objectName(objectName: string  | undefined) {
        this['object_name'] = objectName;
    }
    public get objectName(): string | undefined {
        return this['object_name'];
    }
    public withLockMode(lockMode: string): DeadLockResource {
        this['lock_mode'] = lockMode;
        return this;
    }
    public set lockMode(lockMode: string  | undefined) {
        this['lock_mode'] = lockMode;
    }
    public get lockMode(): string | undefined {
        return this['lock_mode'];
    }
    public withOwnerList(ownerList: Array<DeadLockObject>): DeadLockResource {
        this['owner_list'] = ownerList;
        return this;
    }
    public set ownerList(ownerList: Array<DeadLockObject>  | undefined) {
        this['owner_list'] = ownerList;
    }
    public get ownerList(): Array<DeadLockObject> | undefined {
        return this['owner_list'];
    }
    public withWaiterList(waiterList: Array<DeadLockObject>): DeadLockResource {
        this['waiter_list'] = waiterList;
        return this;
    }
    public set waiterList(waiterList: Array<DeadLockObject>  | undefined) {
        this['waiter_list'] = waiterList;
    }
    public get waiterList(): Array<DeadLockObject> | undefined {
        return this['waiter_list'];
    }
}