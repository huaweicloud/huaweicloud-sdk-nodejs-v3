import { BssInfo } from './BssInfo';
import { Share } from './Share';


export class CreateShareRequestBody {
    public share?: Share;
    private 'bss_param'?: BssInfo;
    public constructor(share?: Share) { 
        this['share'] = share;
    }
    public withShare(share: Share): CreateShareRequestBody {
        this['share'] = share;
        return this;
    }
    public withBssParam(bssParam: BssInfo): CreateShareRequestBody {
        this['bss_param'] = bssParam;
        return this;
    }
    public set bssParam(bssParam: BssInfo  | undefined) {
        this['bss_param'] = bssParam;
    }
    public get bssParam(): BssInfo | undefined {
        return this['bss_param'];
    }
}