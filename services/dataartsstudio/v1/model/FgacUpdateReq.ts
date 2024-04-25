import { FgacSingleUpdateReq } from './FgacSingleUpdateReq';


export class FgacUpdateReq {
    private 'fgac_ids'?: Array<FgacSingleUpdateReq>;
    public constructor() { 
    }
    public withFgacIds(fgacIds: Array<FgacSingleUpdateReq>): FgacUpdateReq {
        this['fgac_ids'] = fgacIds;
        return this;
    }
    public set fgacIds(fgacIds: Array<FgacSingleUpdateReq>  | undefined) {
        this['fgac_ids'] = fgacIds;
    }
    public get fgacIds(): Array<FgacSingleUpdateReq> | undefined {
        return this['fgac_ids'];
    }
}