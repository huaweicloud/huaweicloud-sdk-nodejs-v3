import { RecycleBinPolicyRequestBody } from './RecycleBinPolicyRequestBody';


export class UpdateRecycleBinPolicyRequestBody {
    private 'recycle_bin'?: RecycleBinPolicyRequestBody;
    public constructor() { 
    }
    public withRecycleBin(recycleBin: RecycleBinPolicyRequestBody): UpdateRecycleBinPolicyRequestBody {
        this['recycle_bin'] = recycleBin;
        return this;
    }
    public set recycleBin(recycleBin: RecycleBinPolicyRequestBody  | undefined) {
        this['recycle_bin'] = recycleBin;
    }
    public get recycleBin(): RecycleBinPolicyRequestBody | undefined {
        return this['recycle_bin'];
    }
}