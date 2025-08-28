

export class ChangeChargeModeBody {
    private 'instance_id_list'?: Array<string>;
    private 'datastore_type'?: string;
    public constructor(instanceIdList?: Array<string>, datastoreType?: string) { 
        this['instance_id_list'] = instanceIdList;
        this['datastore_type'] = datastoreType;
    }
    public withInstanceIdList(instanceIdList: Array<string>): ChangeChargeModeBody {
        this['instance_id_list'] = instanceIdList;
        return this;
    }
    public set instanceIdList(instanceIdList: Array<string>  | undefined) {
        this['instance_id_list'] = instanceIdList;
    }
    public get instanceIdList(): Array<string> | undefined {
        return this['instance_id_list'];
    }
    public withDatastoreType(datastoreType: string): ChangeChargeModeBody {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): string | undefined {
        return this['datastore_type'];
    }
}