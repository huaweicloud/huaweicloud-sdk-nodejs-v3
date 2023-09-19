

export class ShootScriptAudioFileItem {
    private 'sequence_no'?: number;
    private 'audio_file_upload_url'?: string;
    private 'audio_file_download_url'?: string;
    public constructor(sequenceNo?: number) { 
        this['sequence_no'] = sequenceNo;
    }
    public withSequenceNo(sequenceNo: number): ShootScriptAudioFileItem {
        this['sequence_no'] = sequenceNo;
        return this;
    }
    public set sequenceNo(sequenceNo: number  | undefined) {
        this['sequence_no'] = sequenceNo;
    }
    public get sequenceNo(): number | undefined {
        return this['sequence_no'];
    }
    public withAudioFileUploadUrl(audioFileUploadUrl: string): ShootScriptAudioFileItem {
        this['audio_file_upload_url'] = audioFileUploadUrl;
        return this;
    }
    public set audioFileUploadUrl(audioFileUploadUrl: string  | undefined) {
        this['audio_file_upload_url'] = audioFileUploadUrl;
    }
    public get audioFileUploadUrl(): string | undefined {
        return this['audio_file_upload_url'];
    }
    public withAudioFileDownloadUrl(audioFileDownloadUrl: string): ShootScriptAudioFileItem {
        this['audio_file_download_url'] = audioFileDownloadUrl;
        return this;
    }
    public set audioFileDownloadUrl(audioFileDownloadUrl: string  | undefined) {
        this['audio_file_download_url'] = audioFileDownloadUrl;
    }
    public get audioFileDownloadUrl(): string | undefined {
        return this['audio_file_download_url'];
    }
}