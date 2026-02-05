

export class GenerateSpeechRequestBodyConfig {
    private 'audio_format'?: string;
    private 'sample_rate'?: string;
    private 'voice_name'?: string;
    public speed?: number;
    public pitch?: number;
    public volume?: number;
    public constructor(voiceName?: string) { 
        this['voice_name'] = voiceName;
    }
    public withAudioFormat(audioFormat: string): GenerateSpeechRequestBodyConfig {
        this['audio_format'] = audioFormat;
        return this;
    }
    public set audioFormat(audioFormat: string  | undefined) {
        this['audio_format'] = audioFormat;
    }
    public get audioFormat(): string | undefined {
        return this['audio_format'];
    }
    public withSampleRate(sampleRate: string): GenerateSpeechRequestBodyConfig {
        this['sample_rate'] = sampleRate;
        return this;
    }
    public set sampleRate(sampleRate: string  | undefined) {
        this['sample_rate'] = sampleRate;
    }
    public get sampleRate(): string | undefined {
        return this['sample_rate'];
    }
    public withVoiceName(voiceName: string): GenerateSpeechRequestBodyConfig {
        this['voice_name'] = voiceName;
        return this;
    }
    public set voiceName(voiceName: string  | undefined) {
        this['voice_name'] = voiceName;
    }
    public get voiceName(): string | undefined {
        return this['voice_name'];
    }
    public withSpeed(speed: number): GenerateSpeechRequestBodyConfig {
        this['speed'] = speed;
        return this;
    }
    public withPitch(pitch: number): GenerateSpeechRequestBodyConfig {
        this['pitch'] = pitch;
        return this;
    }
    public withVolume(volume: number): GenerateSpeechRequestBodyConfig {
        this['volume'] = volume;
        return this;
    }
}