

export class UpgradeDatabasePrecheckResult {
    private 'check_item'?: string;
    private 'check_description'?: string;
    private 'check_object'?: string;
    private 'check_status'?: string;
    public constructor(checkItem?: string, checkDescription?: string, checkObject?: string, checkStatus?: string) { 
        this['check_item'] = checkItem;
        this['check_description'] = checkDescription;
        this['check_object'] = checkObject;
        this['check_status'] = checkStatus;
    }
    public withCheckItem(checkItem: string): UpgradeDatabasePrecheckResult {
        this['check_item'] = checkItem;
        return this;
    }
    public set checkItem(checkItem: string  | undefined) {
        this['check_item'] = checkItem;
    }
    public get checkItem(): string | undefined {
        return this['check_item'];
    }
    public withCheckDescription(checkDescription: string): UpgradeDatabasePrecheckResult {
        this['check_description'] = checkDescription;
        return this;
    }
    public set checkDescription(checkDescription: string  | undefined) {
        this['check_description'] = checkDescription;
    }
    public get checkDescription(): string | undefined {
        return this['check_description'];
    }
    public withCheckObject(checkObject: string): UpgradeDatabasePrecheckResult {
        this['check_object'] = checkObject;
        return this;
    }
    public set checkObject(checkObject: string  | undefined) {
        this['check_object'] = checkObject;
    }
    public get checkObject(): string | undefined {
        return this['check_object'];
    }
    public withCheckStatus(checkStatus: string): UpgradeDatabasePrecheckResult {
        this['check_status'] = checkStatus;
        return this;
    }
    public set checkStatus(checkStatus: string  | undefined) {
        this['check_status'] = checkStatus;
    }
    public get checkStatus(): string | undefined {
        return this['check_status'];
    }
}