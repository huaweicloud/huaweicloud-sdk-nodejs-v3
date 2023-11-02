

export class IdsParam {
    public ids?: Array<number>;
    private 'del_types'?: IdsParamDelTypesEnum | string;
    public constructor(ids?: Array<number>) { 
        this['ids'] = ids;
    }
    public withIds(ids: Array<number>): IdsParam {
        this['ids'] = ids;
        return this;
    }
    public withDelTypes(delTypes: IdsParamDelTypesEnum | string): IdsParam {
        this['del_types'] = delTypes;
        return this;
    }
    public set delTypes(delTypes: IdsParamDelTypesEnum | string  | undefined) {
        this['del_types'] = delTypes;
    }
    public get delTypes(): IdsParamDelTypesEnum | string | undefined {
        return this['del_types'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum IdsParamDelTypesEnum {
    PHYSICAL_TABLE = 'PHYSICAL_TABLE'
}
