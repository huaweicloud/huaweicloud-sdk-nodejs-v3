

export class IpBindingBody {
    private 'package_id'?: string;
    private 'id_list'?: Array<string>;
    public constructor(packageId?: string, idList?: Array<string>) { 
        this['package_id'] = packageId;
        this['id_list'] = idList;
    }
    public withPackageId(packageId: string): IpBindingBody {
        this['package_id'] = packageId;
        return this;
    }
    public set packageId(packageId: string  | undefined) {
        this['package_id'] = packageId;
    }
    public get packageId(): string | undefined {
        return this['package_id'];
    }
    public withIdList(idList: Array<string>): IpBindingBody {
        this['id_list'] = idList;
        return this;
    }
    public set idList(idList: Array<string>  | undefined) {
        this['id_list'] = idList;
    }
    public get idList(): Array<string> | undefined {
        return this['id_list'];
    }
}