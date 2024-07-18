import { UnsubscribeVolume } from './UnsubscribeVolume';


export class UnsubscribeVolumeResponseBody {
    public results?: Array<UnsubscribeVolume>;
    public constructor(results?: Array<UnsubscribeVolume>) { 
        this['results'] = results;
    }
    public withResults(results: Array<UnsubscribeVolume>): UnsubscribeVolumeResponseBody {
        this['results'] = results;
        return this;
    }
}