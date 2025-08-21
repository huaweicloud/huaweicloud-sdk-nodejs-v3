import { ListCesInstanceRspBodyAudio } from './ListCesInstanceRspBodyAudio';
import { ListCesInstanceRspBodyMedialiveMpc } from './ListCesInstanceRspBodyMedialiveMpc';
import { ListCesInstanceRspBodyPipeline } from './ListCesInstanceRspBodyPipeline';


export class ListCesInstanceRspBodyInstances {
    private 'medialive_mpc'?: ListCesInstanceRspBodyMedialiveMpc;
    public pipeline?: ListCesInstanceRspBodyPipeline;
    public audio?: ListCesInstanceRspBodyAudio;
    public constructor(medialiveMpc?: ListCesInstanceRspBodyMedialiveMpc) { 
        this['medialive_mpc'] = medialiveMpc;
    }
    public withMedialiveMpc(medialiveMpc: ListCesInstanceRspBodyMedialiveMpc): ListCesInstanceRspBodyInstances {
        this['medialive_mpc'] = medialiveMpc;
        return this;
    }
    public set medialiveMpc(medialiveMpc: ListCesInstanceRspBodyMedialiveMpc  | undefined) {
        this['medialive_mpc'] = medialiveMpc;
    }
    public get medialiveMpc(): ListCesInstanceRspBodyMedialiveMpc | undefined {
        return this['medialive_mpc'];
    }
    public withPipeline(pipeline: ListCesInstanceRspBodyPipeline): ListCesInstanceRspBodyInstances {
        this['pipeline'] = pipeline;
        return this;
    }
    public withAudio(audio: ListCesInstanceRspBodyAudio): ListCesInstanceRspBodyInstances {
        this['audio'] = audio;
        return this;
    }
}