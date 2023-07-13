import { PornModerationResultDetail } from './PornModerationResultDetail';


export class RunModerationAudioResponseBodyResultDetailAudio {
    public porn?: Array<PornModerationResultDetail>;
    public constructor() { 
    }
    public withPorn(porn: Array<PornModerationResultDetail>): RunModerationAudioResponseBodyResultDetailAudio {
        this['porn'] = porn;
        return this;
    }
}