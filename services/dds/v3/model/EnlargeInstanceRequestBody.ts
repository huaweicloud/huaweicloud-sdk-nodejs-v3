import { AddShardingNodeVolumeOption } from './AddShardingNodeVolumeOption';


export class EnlargeInstanceRequestBody {
    public type?: EnlargeInstanceRequestBodyTypeEnum | string;
    private 'spec_code'?: string;
    public num?: string;
    public volume?: AddShardingNodeVolumeOption;
    private 'is_auto_pay'?: boolean;
    public constructor(type?: string, specCode?: string, num?: string) { 
        this['type'] = type;
        this['spec_code'] = specCode;
        this['num'] = num;
    }
    public withType(type: EnlargeInstanceRequestBodyTypeEnum | string): EnlargeInstanceRequestBody {
        this['type'] = type;
        return this;
    }
    public withSpecCode(specCode: string): EnlargeInstanceRequestBody {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
    public withNum(num: string): EnlargeInstanceRequestBody {
        this['num'] = num;
        return this;
    }
    public withVolume(volume: AddShardingNodeVolumeOption): EnlargeInstanceRequestBody {
        this['volume'] = volume;
        return this;
    }
    public withIsAutoPay(isAutoPay: boolean): EnlargeInstanceRequestBody {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: boolean  | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay(): boolean | undefined {
        return this['is_auto_pay'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EnlargeInstanceRequestBodyTypeEnum {
    MONGOS = 'mongos',
    SHARD = 'shard'
}
