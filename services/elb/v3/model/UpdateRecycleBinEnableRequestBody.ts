import { RecycleBinRequestBody } from './RecycleBinRequestBody';


export class UpdateRecycleBinEnableRequestBody {
    private 'recycle_bin'?: RecycleBinRequestBody;
    public constructor() { 
    }
    public withRecycleBin(recycleBin: RecycleBinRequestBody): UpdateRecycleBinEnableRequestBody {
        this['recycle_bin'] = recycleBin;
        return this;
    }
    public set recycleBin(recycleBin: RecycleBinRequestBody  | undefined) {
        this['recycle_bin'] = recycleBin;
    }
    public get recycleBin(): RecycleBinRequestBody | undefined {
        return this['recycle_bin'];
    }
}