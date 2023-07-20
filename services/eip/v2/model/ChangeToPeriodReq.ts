import { CreatePrePaidPublicipExtendParamOption } from './CreatePrePaidPublicipExtendParamOption';


export class ChangeToPeriodReq {
    private 'publicip_ids'?: Array<string>;
    public extendParam?: CreatePrePaidPublicipExtendParamOption;
    public constructor(publicipIds?: Array<string>, extendParam?: CreatePrePaidPublicipExtendParamOption) { 
        this['publicip_ids'] = publicipIds;
        this['extendParam'] = extendParam;
    }
    public withPublicipIds(publicipIds: Array<string>): ChangeToPeriodReq {
        this['publicip_ids'] = publicipIds;
        return this;
    }
    public set publicipIds(publicipIds: Array<string>  | undefined) {
        this['publicip_ids'] = publicipIds;
    }
    public get publicipIds(): Array<string> | undefined {
        return this['publicip_ids'];
    }
    public withExtendParam(extendParam: CreatePrePaidPublicipExtendParamOption): ChangeToPeriodReq {
        this['extendParam'] = extendParam;
        return this;
    }
}