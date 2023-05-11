import { TrackerOBSChannelConfigBody } from './TrackerOBSChannelConfigBody';
import { TrackerSMNChannelConfigBody } from './TrackerSMNChannelConfigBody';


export class ChannelConfigBody {
    public smn?: TrackerSMNChannelConfigBody;
    public obs?: TrackerOBSChannelConfigBody;
    public constructor() { 
    }
    public withSmn(smn: TrackerSMNChannelConfigBody): ChannelConfigBody {
        this['smn'] = smn;
        return this;
    }
    public withObs(obs: TrackerOBSChannelConfigBody): ChannelConfigBody {
        this['obs'] = obs;
        return this;
    }
}