

export class MpeMetaData {
    private 'pack_type'?: string | undefined;
    public duration?: number;
    private 'video_size'?: number | undefined;
    public width?: number;
    public height?: number;
    private 'bit_rate'?: number | undefined;
    private 'audio_bit_rate'?: number | undefined;
    private 'frame_rate'?: number | undefined;
    private 'codec_name'?: string | undefined;
    private 'audio_codec_name'?: string | undefined;
    public channels?: number;
    public sample?: number;
    private 'is_audio'?: boolean | undefined;
    public constructor() { 
    }
    public withPackType(packType: string): MpeMetaData {
        this['pack_type'] = packType;
        return this;
    }
    public set packType(packType: string | undefined) {
        this['pack_type'] = packType;
    }
    public get packType() {
        return this['pack_type'];
    }
    public withDuration(duration: number): MpeMetaData {
        this['duration'] = duration;
        return this;
    }
    public withVideoSize(videoSize: number): MpeMetaData {
        this['video_size'] = videoSize;
        return this;
    }
    public set videoSize(videoSize: number | undefined) {
        this['video_size'] = videoSize;
    }
    public get videoSize() {
        return this['video_size'];
    }
    public withWidth(width: number): MpeMetaData {
        this['width'] = width;
        return this;
    }
    public withHeight(height: number): MpeMetaData {
        this['height'] = height;
        return this;
    }
    public withBitRate(bitRate: number): MpeMetaData {
        this['bit_rate'] = bitRate;
        return this;
    }
    public set bitRate(bitRate: number | undefined) {
        this['bit_rate'] = bitRate;
    }
    public get bitRate() {
        return this['bit_rate'];
    }
    public withAudioBitRate(audioBitRate: number): MpeMetaData {
        this['audio_bit_rate'] = audioBitRate;
        return this;
    }
    public set audioBitRate(audioBitRate: number | undefined) {
        this['audio_bit_rate'] = audioBitRate;
    }
    public get audioBitRate() {
        return this['audio_bit_rate'];
    }
    public withFrameRate(frameRate: number): MpeMetaData {
        this['frame_rate'] = frameRate;
        return this;
    }
    public set frameRate(frameRate: number | undefined) {
        this['frame_rate'] = frameRate;
    }
    public get frameRate() {
        return this['frame_rate'];
    }
    public withCodecName(codecName: string): MpeMetaData {
        this['codec_name'] = codecName;
        return this;
    }
    public set codecName(codecName: string | undefined) {
        this['codec_name'] = codecName;
    }
    public get codecName() {
        return this['codec_name'];
    }
    public withAudioCodecName(audioCodecName: string): MpeMetaData {
        this['audio_codec_name'] = audioCodecName;
        return this;
    }
    public set audioCodecName(audioCodecName: string | undefined) {
        this['audio_codec_name'] = audioCodecName;
    }
    public get audioCodecName() {
        return this['audio_codec_name'];
    }
    public withChannels(channels: number): MpeMetaData {
        this['channels'] = channels;
        return this;
    }
    public withSample(sample: number): MpeMetaData {
        this['sample'] = sample;
        return this;
    }
    public withIsAudio(isAudio: boolean): MpeMetaData {
        this['is_audio'] = isAudio;
        return this;
    }
    public set isAudio(isAudio: boolean | undefined) {
        this['is_audio'] = isAudio;
    }
    public get isAudio() {
        return this['is_audio'];
    }
}