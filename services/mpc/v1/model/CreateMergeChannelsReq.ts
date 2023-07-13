import { MpcMultiAudio } from './MpcMultiAudio';


export class CreateMergeChannelsReq {
    private 'multi_audio'?: MpcMultiAudio | undefined;
    public constructor() { 
    }
    public withMultiAudio(multiAudio: MpcMultiAudio): CreateMergeChannelsReq {
        this['multi_audio'] = multiAudio;
        return this;
    }
    public set multiAudio(multiAudio: MpcMultiAudio | undefined) {
        this['multi_audio'] = multiAudio;
    }
    public get multiAudio() {
        return this['multi_audio'];
    }
}