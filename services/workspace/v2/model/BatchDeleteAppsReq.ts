import { StringSet } from './StringSet';


export class BatchDeleteAppsReq {
    public items?: Array<string>;
    private 'reserve_obs_file'?: boolean;
    public constructor(items?: Array<string>) { 
        this['items'] = items;
    }
    public withItems(items: Array<string>): BatchDeleteAppsReq {
        this['items'] = items;
        return this;
    }
    public withReserveObsFile(reserveObsFile: boolean): BatchDeleteAppsReq {
        this['reserve_obs_file'] = reserveObsFile;
        return this;
    }
    public set reserveObsFile(reserveObsFile: boolean  | undefined) {
        this['reserve_obs_file'] = reserveObsFile;
    }
    public get reserveObsFile(): boolean | undefined {
        return this['reserve_obs_file'];
    }
}