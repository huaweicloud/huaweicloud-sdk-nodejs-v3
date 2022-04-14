import { RunModerationAudioResponseBodyResultDetailAudio } from './RunModerationAudioResponseBodyResultDetailAudio';


export class RunModerationAudioResponseBodyResultDetail {
    public text?: object;
    public audio?: RunModerationAudioResponseBodyResultDetailAudio;
    public constructor() { 
    }
    public withText(text: object): RunModerationAudioResponseBodyResultDetail {
        this['text'] = text;
        return this;
    }
    public withAudio(audio: RunModerationAudioResponseBodyResultDetailAudio): RunModerationAudioResponseBodyResultDetail {
        this['audio'] = audio;
        return this;
    }
}