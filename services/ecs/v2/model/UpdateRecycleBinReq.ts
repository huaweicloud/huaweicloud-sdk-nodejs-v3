import { UpdateRecycleBinOption } from './UpdateRecycleBinOption';


export class UpdateRecycleBinReq {
    private 'recycle_bin'?: UpdateRecycleBinOption;
    public constructor() { 
    }
    public withRecycleBin(recycleBin: UpdateRecycleBinOption): UpdateRecycleBinReq {
        this['recycle_bin'] = recycleBin;
        return this;
    }
    public set recycleBin(recycleBin: UpdateRecycleBinOption  | undefined) {
        this['recycle_bin'] = recycleBin;
    }
    public get recycleBin(): UpdateRecycleBinOption | undefined {
        return this['recycle_bin'];
    }
}