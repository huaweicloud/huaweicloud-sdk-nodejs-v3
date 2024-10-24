import { AudioSelectorLangSelection } from './AudioSelectorLangSelection';
import { AudioSelectorPidSelection } from './AudioSelectorPidSelection';


export class AudioSelectorSettings {
    private 'audio_language_selection'?: AudioSelectorLangSelection;
    private 'audio_pid_selection'?: AudioSelectorPidSelection;
    public constructor() { 
    }
    public withAudioLanguageSelection(audioLanguageSelection: AudioSelectorLangSelection): AudioSelectorSettings {
        this['audio_language_selection'] = audioLanguageSelection;
        return this;
    }
    public set audioLanguageSelection(audioLanguageSelection: AudioSelectorLangSelection  | undefined) {
        this['audio_language_selection'] = audioLanguageSelection;
    }
    public get audioLanguageSelection(): AudioSelectorLangSelection | undefined {
        return this['audio_language_selection'];
    }
    public withAudioPidSelection(audioPidSelection: AudioSelectorPidSelection): AudioSelectorSettings {
        this['audio_pid_selection'] = audioPidSelection;
        return this;
    }
    public set audioPidSelection(audioPidSelection: AudioSelectorPidSelection  | undefined) {
        this['audio_pid_selection'] = audioPidSelection;
    }
    public get audioPidSelection(): AudioSelectorPidSelection | undefined {
        return this['audio_pid_selection'];
    }
}