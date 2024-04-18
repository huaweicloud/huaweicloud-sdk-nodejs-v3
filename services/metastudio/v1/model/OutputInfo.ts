

export class OutputInfo {
    private 'face_addr'?: string;
    private 'body_addr'?: string;
    private 'audio_addr'?: string;
    private 'session_id'?: number;
    private 'output_data_version'?: string;
    public constructor() { 
    }
    public withFaceAddr(faceAddr: string): OutputInfo {
        this['face_addr'] = faceAddr;
        return this;
    }
    public set faceAddr(faceAddr: string  | undefined) {
        this['face_addr'] = faceAddr;
    }
    public get faceAddr(): string | undefined {
        return this['face_addr'];
    }
    public withBodyAddr(bodyAddr: string): OutputInfo {
        this['body_addr'] = bodyAddr;
        return this;
    }
    public set bodyAddr(bodyAddr: string  | undefined) {
        this['body_addr'] = bodyAddr;
    }
    public get bodyAddr(): string | undefined {
        return this['body_addr'];
    }
    public withAudioAddr(audioAddr: string): OutputInfo {
        this['audio_addr'] = audioAddr;
        return this;
    }
    public set audioAddr(audioAddr: string  | undefined) {
        this['audio_addr'] = audioAddr;
    }
    public get audioAddr(): string | undefined {
        return this['audio_addr'];
    }
    public withSessionId(sessionId: number): OutputInfo {
        this['session_id'] = sessionId;
        return this;
    }
    public set sessionId(sessionId: number  | undefined) {
        this['session_id'] = sessionId;
    }
    public get sessionId(): number | undefined {
        return this['session_id'];
    }
    public withOutputDataVersion(outputDataVersion: string): OutputInfo {
        this['output_data_version'] = outputDataVersion;
        return this;
    }
    public set outputDataVersion(outputDataVersion: string  | undefined) {
        this['output_data_version'] = outputDataVersion;
    }
    public get outputDataVersion(): string | undefined {
        return this['output_data_version'];
    }
}