

export class BindingGeipBody {
    private 'global_eip_id'?: string;
    public type?: BindingGeipBodyTypeEnum | string;
    public constructor(globalEipId?: string) { 
        this['global_eip_id'] = globalEipId;
    }
    public withGlobalEipId(globalEipId: string): BindingGeipBody {
        this['global_eip_id'] = globalEipId;
        return this;
    }
    public set globalEipId(globalEipId: string  | undefined) {
        this['global_eip_id'] = globalEipId;
    }
    public get globalEipId(): string | undefined {
        return this['global_eip_id'];
    }
    public withType(type: BindingGeipBodyTypeEnum | string): BindingGeipBody {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BindingGeipBodyTypeEnum {
    IP_ADDRESS = 'IP_ADDRESS',
    IP_SEGMENT = 'IP_SEGMENT'
}
