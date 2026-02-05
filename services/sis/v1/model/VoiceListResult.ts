import { VoiceListResultVoices } from './VoiceListResultVoices';


export class VoiceListResult {
    public voices?: Array<VoiceListResultVoices>;
    public constructor() { 
    }
    public withVoices(voices: Array<VoiceListResultVoices>): VoiceListResult {
        this['voices'] = voices;
        return this;
    }
}