import { AudioSelectorSettings } from './AudioSelectorSettings';


export class InputAudioSelector {
    public name?: string;
    private 'selector_settings'?: AudioSelectorSettings;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): InputAudioSelector {
        this['name'] = name;
        return this;
    }
    public withSelectorSettings(selectorSettings: AudioSelectorSettings): InputAudioSelector {
        this['selector_settings'] = selectorSettings;
        return this;
    }
    public set selectorSettings(selectorSettings: AudioSelectorSettings  | undefined) {
        this['selector_settings'] = selectorSettings;
    }
    public get selectorSettings(): AudioSelectorSettings | undefined {
        return this['selector_settings'];
    }
}